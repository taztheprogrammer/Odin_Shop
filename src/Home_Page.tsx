function Home_Page(props) {

    return  (
        <>
        <h1>Odin Shop</h1>
        <hr/>
        <div className="p1">
            <p>Hello, Welcome to my online shop project. In this application you are able to shop for specific items, add items to your cart and inspect the cart. </p>
        </div>
        
        <button onClick={() => props.setpageNum(1)}>Shop Page</button>
        
        </>
    )
    
}


export default Home_Page