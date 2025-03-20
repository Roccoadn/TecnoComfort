import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getProduct } from '../firebase/db'
import ItemDetail from './ItemDetail/ItemDetail'    

function ItemDetailContainer () {
    const [detail, setDetail] = useState()
    const { id } = useParams()

    useEffect(() => {
        getProduct(id).then(product => setDetail(product))
    }, [id])

    return (
        <ItemDetail detail = {detail} />
    )
}

export default ItemDetailContainer