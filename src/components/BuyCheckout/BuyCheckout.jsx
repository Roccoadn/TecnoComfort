import { serverTimestamp } from "firebase/firestore"
import { useCartContext } from "../../context/cartContext"
import { createBuyOrder } from "../../firebase/db"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from "react-router"
import styles from './BuyCheckout.module.css'


function BuyCheckout () {
    const { cart, getTotal, clearCart } = useCartContext()
    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)

    const handleSubmit = async (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const name = form.fullname.value
        const phone = form.phone.value
        console.log('compra realizada con exito')
        
        const order = {
            products: cart,
            client: {fullname: name, email: email, phone: phone},
            time: serverTimestamp(),
            total: getTotal(),
        } 
        const id = await createBuyOrder(order)

        if (id) {
            clearCart()
        }

        MySwal.fire({
            title: "Compra finalizada!",
            text: `Tu orden de compra es -> ${id} `,
            background: '#0e0e0e',
            color: 'white',
            confirmButtonColor:'#e27b1b',
          }).then(() => navigate('/'))
    }

    return (
        <div className={styles.checkoutContainer}>
            <form onSubmit={handleSubmit} className={styles.checkoutForm}>
                <label htmlFor="email">Correo electronico</label>
                <input id="email" type="email" placeholder="example@gmail.com" required />

                <label htmlFor="fullname">Nombre y apellido</label>
                <input id="fullname" type="text" placeholder="Example Apple" required />

                <label htmlFor="phone">Numero de telefono</label>
                <input id="phone" type="number" placeholder="11-2233-4455" required />

                <button className={styles.buttonCheckout} type="submit">Enviar</button>
            </form>
        </div>
        
    )
}

export default BuyCheckout