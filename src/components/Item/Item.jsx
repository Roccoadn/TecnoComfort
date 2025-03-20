/* eslint-disable react/prop-types */
import styles from './Item.module.css'
import { Link } from 'react-router';

function Item ({ products }){
    return (
        <div className={styles.itemContainer}> 
            <img src={products.thumbnail} alt={products.name}/>
            <h2>{products.title}</h2>
            <p>$ {products.price}</p>
            <button><Link className={styles.Link} to={`/item/${products.id}`}>Ver detalle
            </Link></button>
        </div>
    )
}

export default Item;