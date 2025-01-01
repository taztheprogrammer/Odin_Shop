import Item_Card from './Item_Card.tsx'

function Shop_Page(props) {

    return (
        <>
        <button onClick={() => props.setpageNum(0)}>Home Page</button>
        <p className="PageName">Shop Page</p>
        <div className='CardContainer'
        style={{border: '1px solid black', height: '500px', padding: '5px'}}
        >
            <Item_Card />
        </div>
        </>
        
    )
}

export default Shop_Page