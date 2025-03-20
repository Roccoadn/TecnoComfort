/* eslint-disable react/prop-types */
import { useState, useContext } from 'react'
import { cartContext } from '../../context/cartContext'

function Counter({ product }) {
    const [count, setCount] = useState(0)
    const { addToCart } = useContext(cartContext)

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleRest = () => {
        setCount(count - 1)
    }

    const handleAddToCart = () => {
        addToCart({...product, quantity: count})
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleAdd}> + </button>
            <button onClick={handleRest}> - </button>
            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
    )
}

export default Counter


