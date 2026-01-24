import React from 'react'

const Product = (props) => {
    return (
    <div>
        <span>Name: {props.name}</span><br></br>
        <span>Brand: {props.brand}</span><br></br>
        <span>Price: {props.price}</span><br></br><br></br>
    </div>
    )
}

export default Product