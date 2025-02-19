import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail/ItemDetail'    

function ItemDetailContainer () {
    const [detail, setDetail] = useState()
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(res => setDetail(res))
    }, [id])
    console.log(detail)

    return (
        <ItemDetail detail = {detail} />
    )
}

export default ItemDetailContainer