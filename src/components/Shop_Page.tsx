import { useState, useEffect } from 'react'
import Item_Card from './Item_Card.tsx'
import '../Item_Card.css'

function Shop_Page(props) {
    // const [items, setItems] = useState([])
    const items = [1, 2, 3, 4, 5]

    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products?limit=5')
    //     .then((res) => res.json())
    //     .then((data) =>setItems(data))

    // })

    return (
        <div className="shopPage">
        <button onClick={() => props.setpageNum(0)}>Home Page</button>

        <p className="PageName">Shop Page</p>

        <div className='CardContainer'>

            {items.map((item) => (
                <div className="Card">
                    <p>hi</p>
                </div>
            ))}

        </div>

        </div>
        
    )
}

export default Shop_Page