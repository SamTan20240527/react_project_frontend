//TODO: MODIFY INPUT - REMOVE SALUTATION, COUNTRY, ADD ADDRESS
//Part 5: Step 5: Create RegisterPage.jsx
//Part 6: Step 2: Add formik
//Part 6: Step 4: Add Yup
//Part 6: Step 6: Add axios
//Part 8: Step 3: Add useFlashMessage hook

import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useLocation } from 'wouter';
import { useFlashMessage } from './FlashMessageStore';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    address: Yup.string().required('Address is required')
});

function RegisterPage() {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
    };

    const [, setLocation] = useLocation();
    const [showSuccess, setShowSuccess] = useState(false);
    const { showMessage } = useFlashMessage();
    const handleSubmit = async (values, formikHelpers) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/register`, values);
            console.log('Registration successful:', response.data);
            showMessage('Registration successful!', 'success');

        } catch (error) {
            console.error('Registration failed:', error.response?.data || error.message);
            showMessage('Registration failed. Please try again.', 'error');
        } finally {
            formikHelpers.setSubmitting(false);
            setLocation('/');
        }
    };

    return (
        <div className="container mt-5">
            <h1>Register</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {(formik) => (
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                            />
                            {formik.errors.name && formik.touched.name ? <div className="text-danger">{formik.errors.name}</div> : null}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <Field
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                            />
                            {formik.errors.email && formik.touched.email ? <div className="text-danger">{formik.errors.email}</div> : null}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <Field
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                            />
                            {formik.errors.password && formik.touched.password ? <div className="text-danger">{formik.errors.password}</div> : null}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <Field
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                name="confirmPassword"
                            />
                            {formik.errors.confirmPassword && formik.touched.confirmPassword ? <div className="text-danger">{formik.errors.confirmPassword}</div> : null}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                            />
                            {formik.errors.address && formik.touched.address ? <div className="text-danger">{formik.errors.address}</div> : null}
                        </div>
                        
                         <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={formik.isSubmitting}
                        >
                            Register
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default RegisterPage;