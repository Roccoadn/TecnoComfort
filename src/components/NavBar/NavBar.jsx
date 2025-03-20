import CartWidget from "../CartWidget/CartWidget";
import styles from './NavBar.module.css'
import { Link } from "react-router";    

function Navbar () {
    return (
        <nav className={styles.NavBar}>
            <Link className="styles.Img" to='/'><img src="/logo.png" alt="logo" /></Link>
            <div className={styles.ListaNav}>
                <ul>
                    <Link className={styles.Link} to='category/smartphones'>Smartphones</Link>
                    <Link className={styles.Link} to='category/tablets'>Tablets</Link>
                    <Link className={styles.Link} to='category/notebooks'>Notebooks</Link>
                </ul>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar;