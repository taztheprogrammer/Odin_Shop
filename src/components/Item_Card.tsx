export default function Item_Card( { itemData } ) {



    return <div className="Card">
        <h3>{itemData.title}</h3>
        <p>{itemData.price}</p>
        <img src={itemData.image} alt={itemData.title}/>
    </div>
    
    ;

}