/* eslint-disable react/prop-types */
import styles from "./ItemDetail.module.css"
import Counter from "../Counter/Counter"

function ItemDetail( {detail} ) {
  return (
    <div className={styles.ItemDetailContainer}> 
        <img src={detail?.thumbnail} alt={detail?.name}/>
        <div className={styles.ItemTextContainer}>
          <h2>{detail?.title}</h2>
          <h3>{detail?.description}</h3>
          <p>$ {detail?.price}</p>
          <Counter className={styles.Counter} product={detail}></Counter>
        </div>
    </div>
  )
}

export default ItemDetail;