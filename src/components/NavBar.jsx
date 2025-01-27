import CartWidget from "./CartWidget";

function Navbar () {
    return (
        <nav>
            <img src="/logo.png" alt="logo" />
            <div className="ListaNav">
                <ul>
                    <li>Electrodomesticos</li>
                    <li>Telefonos</li>
                    <li>Consolas</li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar;