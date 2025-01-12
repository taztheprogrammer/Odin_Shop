import Nav_Bar from "../Navigation/Nav_Bar"
import "./Home_Page.css"
function Home_Page(props) {

    return  (
        <body>
        <Nav_Bar/>
        <div className="mainContent">

        <div className="p1">
            <p>Hello, Welcome to my online shop project. In this application you are able to shop for specific items, add items to your cart and inspect the cart. </p>
        </div>
        
        <button onClick={() => props.setpageNum(1)}>Shop Page</button>


        </div>
        </body>
    )
    
}


export default Home_Page