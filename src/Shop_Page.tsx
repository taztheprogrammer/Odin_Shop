import { useState, useEffect } from 'react'
import Item_Card from './Item_Card.tsx'

function Shop_Page(props) {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
        .then((res) => res.json())
        .then((data) =>setItems(data))

    })

    return (
        <>
        <button onClick={() => props.setpageNum(0)}>Home Page</button>
        <p className="PageName">Shop Page</p>
        <div className='CardContainer'
        style={{border: '1px solid black', height: '500px', padding: '5px'}}>
            {items.map((item) => (
                <Item_Card key={item.id} itemData={item} />
            ))}



            
        </div>
        </>
        
    )
}

export default Shop_Page