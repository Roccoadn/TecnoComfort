/* eslint-disable react/prop-types */
import { cartContext } from "./cartContext"
import { useState } from 'react'

function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (product) => { 
        setCart(prevCart => {
            const existingProduct = prevCart.find(p => p.id === product.id);
            if (existingProduct) {
                return prevCart.map(p => 
                    p.id === product.id ? { ...p, quantity: p.quantity + product.quantity } : p
                );
            } else {
                return [...prevCart, product];
            }
        });
    };

    const getQuantity = () => {
        const quantities = cart.map((product) => product.quantity)
        const result = quantities.reduce((acc, quantity) => acc + quantity, 0)
        return result
    }

    const getTotal = () => {
        const prices = cart.map((product) => product.price*product.quantity)
        const total = prices.reduce((acc, current) => acc + current, 0)
        return total
    }

    const clearCart = () => {
        setCart([])
    }

    const cartReduceOne = (productId) => {
        setCart(prevCart => prevCart.map(product => 
            product.id === productId && product.quantity >= 1
                ? { ...product, quantity: product.quantity - 1 }
                : product
        ).filter(product => product.quantity > 0));
    };
    

    return (
        <cartContext.Provider value={{ addToCart, getQuantity, getTotal, clearCart, cartReduceOne, cart }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider