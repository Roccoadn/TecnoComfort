import { useCartContext } from "../../context/cartContext"
import styles from './CartContainer.module.css'
import { Link } from "react-router";    

function CartContainer () {
    const { cart, getTotal, cartReduceOne } = useCartContext()
    return (
        <div className={styles.container}>
            <h2>Carrito de productos</h2>
            <ul>
                {cart.map(prod => <li key={prod.id}>
                    <img src={prod.thumbnail} alt="product-image"/> 
                    <h3>
                        {prod.title} 
                        <span className={styles.quantitySpan}>
                            x {prod.quantity}
                        </span>
                    </h3>  
                    <button onClick={() => cartReduceOne(prod.id)} className={styles.deleteButton}>
                        X
                    </button>
                </li>)}
            </ul>
            <h3>El total de tu compra es: <span>$ {getTotal()}</span></h3>
            <button className={styles.continuarButton}><Link to='/buycheckout'>Continuar a la compra</Link></button>
        </div>
    )
}

export default CartContainer