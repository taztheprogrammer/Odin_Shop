import { useState, useEffect } from 'react';
import './Item_Card.css'

export default function Item_Card() {
    const [itemData, setItemData] = useState(null);

    useEffect( 
    () => {
        fetch('https://fakestoreapi.com/products/1')
        .then(res=>res.json())
        .then((data)=>setItemData(data))
    }, [])

    if (itemData) {
        return <>
        <div className="Card">
        <h3>{itemData.title}</h3>
        <p>{itemData.price}</p>
        <img src={itemData.image}></img>
        </div>
    </>
    }

    return null;

}