import { atom, useAtom } from 'jotai';
import Immutable from "seamless-immutable";

// Define the initial state of the cart. We put in one piece of test data
const initialCart = [
    {
        "id": 1,
        "product_id": 1,
        "quantity": 10,
        "productName": "Organic Green Tea",
        "price": 12.99,
        "imageUrl": "https://picsum.photos/id/225/300/200",
        "description": "Premium organic green tea leaves, rich in antioxidants and offering a smooth, refreshing taste."
    },
];

// Create an atom for the cart
export const cartAtom = atom(initialCart);

// Custom hook for cart operations
export const useCart = () => {
    const [cart, setCart] = useAtom(cartAtom);

    // Function to calculate the total price of items in the cart
    const getCartTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    const addToCart = (product) => {
        setCart((currentCart) => {
            const existingItemIndex = currentCart.findIndex(item => item.product_id === product.id);
            if (existingItemIndex !== -1) {
                // Use setIn to update quantity immutably
                const currentQuantity = currentCart[existingItemIndex].quantity;
                return currentCart.setIn([existingItemIndex, 'quantity'], currentQuantity + 1);
            } else {
                // Use concat to add a new item immutably
                return currentCart.concat({ ...product, product_id: product.id, quantity: 1 });
            }
        });
    };

    return {
        cart,
        getCartTotal,
    };
};