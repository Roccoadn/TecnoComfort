import styles from "./CartWidget.module.css"
import { useCartContext } from "../../context/cartContext"
import { useNavigate }  from "react-router"

function CartWidget () {
    const navigate = useNavigate()
    const handleCart = () => {
        if (prodQuantity > 0) {
            navigate("/cart");
        } else {
            navigate("/error404");
        }
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