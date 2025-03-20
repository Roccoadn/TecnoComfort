import styles from "./CartWidget.module.css"
import { useCartContext } from "../../context/cartContext"
import { useNavigate }  from "react-router"

function CartWidget () {
    const navigate = useNavigate()
    const handleCart = () => {
        navigate("/cart")
    }

    const { getQuantity } = useCartContext()

    const prodQuantity = getQuantity()

    return (
        <div className={styles.CartWidget} onClick={handleCart}>
            <p>🛒{prodQuantity}</p>
        </div>
    )
}

export default CartWidget;