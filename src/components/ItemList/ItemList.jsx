/* eslint-disable react/prop-types */
import Item from '../Item/Item';
import styles from './ItemList.module.css';
function ItemList ( {items} ) {
    return (
        <div className={styles.itemList}>
        {items.map(products => <Item products={products} key={products.id} />)}
        </div>
    )
}

export default ItemList;