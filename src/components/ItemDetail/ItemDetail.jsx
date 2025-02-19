/* eslint-disable react/prop-types */
import styles from "./ItemDetail.module.css"

function ItemDetail( {detail} ) {
  return (
    <div className={styles.ItemDetailContainer}> 
        <img src={detail?.thumbnail} alt={detail?.name}/>
        <h2>{detail?.title}</h2>
        <h3>{detail?.description}</h3>
        <p>$ {detail?.price}</p>
    </div>
  )
}

export default ItemDetail;