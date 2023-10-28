const Service_View = (props) => {

    const {name, price, image} = props
    return (
        <div>
            <h1>{name}</h1>
            <h2>{price} </h2>
            <img src={image} />
            
        </div>
    )
}


export default Service_View;