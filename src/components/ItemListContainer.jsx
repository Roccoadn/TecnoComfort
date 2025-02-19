import { useState, useEffect } from 'react';    
import { useParams } from 'react-router';
import ItemList from './ItemList/ItemList';

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const { id } = useParams()
    
    useEffect(() => {
        const categories = ['smartphones', 'tablets', 'laptops'];

        if (!id) {
            const allProducts = categories.map(category =>
                fetch(`https://dummyjson.com/products/category/${category}`).then(res => res.json())
            );

            Promise.all(allProducts)
                .then(data => {
                    const allProducts = data.flatMap(categoryData => categoryData.products);
                    setItems(allProducts);
                });
        } else {
            fetch(`https://dummyjson.com/products/category/${id}`)
                .then(res => res.json())
                .then(data => setItems(data.products));
        }
    }, [id]); // Actualiza cuando cambia el id
        
        return (
            <ItemList items={items} />
        );
}

export default ItemListContainer;