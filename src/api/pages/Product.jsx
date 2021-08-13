import React from 'react'
import { useLocation } from 'react-router-dom'

const Product = () => {
    const location = useLocation();
    console.log(location)

    return(
        <p>e</p>
    )
}

export default Product
