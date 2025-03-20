import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getProducts, getProductsByCategory } from '../firebase/db'
import ItemList from './ItemList/ItemList'

function ItemListContainer() {
    const [items, setItems] = useState([])
    const { id } = useParams()
    
    useEffect(() => {
        if (id){
            getProductsByCategory(id).then(products => {setItems(products)})
        } else{
            getProducts().then(products => {setItems(products)}) 
        }
    }, [id]) // Actualiza cuando cambia el id
        
        return (
            <ItemList items={items} />
        )
}

export default ItemListContainer;