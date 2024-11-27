//Part 9: Step 1: Create a Cart Store
//Part 9: Step 3: Add Immutable & test data
//Part 9: Step 3: addToCart
//Part 9: Step 5: modifyQuantity
//Part 9: Step 6: removeFromCart
//Part 14: Step 6: Read cart content from API

import { atom, useAtom } from 'jotai';
import Immutable from "seamless-immutable";

const initialCart = Immutable([
]);

export const cartAtom = atom(initialCart);
export const useCart = () => {
    const [cart, setCart] = useAtom(cartAtom);

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

    const modifyQuantity = (product_id, quantity) => {
        setCart((currentCart) => {
            const existingItemIndex = currentCart.findIndex(item => item.product_id === product_id);
            if (existingItemIndex !== -1) {

                // check if the quantity will be reduced to 0 or less, if so remove the item
                if (quantity < 0) {
                    return currentCart.filter(item => item.product_id !== product_id);
                } else {
                    return currentCart.setIn([existingItemIndex, 'quantity'], quantity);
                }

            }
        });
    }

    const removeFromCart = (product_id) => {
        setCart((currentCart) => {
            return currentCart.filter(item => item.product_id !== product_id);
        });
    }

    const setCartContent = (cartItems) => {
        setCart(Immutable(cartItems));
    }

    return {
        cart,
        getCartTotal,
        addToCart,
        modifyQuantity,
        removeFromCart,
        setCartContent
    };
};