import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, addProducts } from '../redux/reducer'

// Secvice
import getAllProducts from '../service/getAllProducts'

const Products = () => {

    const count = useSelector(state => state.main.count)
    const products = useSelector(state => state.main.products)
    const dispatch = useDispatch()


    return (
        <div className="wrapper">
            <p>Hello Mark</p>
            <p>count : {count}</p>
            <button onClick={() => dispatch(increment())} > + </button>
            <button onClick={() => dispatch(decrement())} > - </button>
            <br />



            <div className="products-block">
                {/* <div className="item">
                    <img 
                        height="100px" 
                        width="100px"  
                        src="https://www.flaticon.com/premium-icon/icons/svg/2268/2268898.svg" 
                        alt=""
                    />
                    <div className="description">
                        <p>Soup Caramel</p>
                        <p>$30.28</p>
                        <p>28</p>
                        <p>Buetiful death</p>
                    </div>
                </div> */}
                { products && console.log("products: ", products)}
                { products && products.map(product => {
                    return(
                        <div className="item">
                            <img 
                                height="100px" 
                                width="100px"  
                                src={product.imgUrl} 
                                alt=""
                            />
                            <div className="description">
                                <p>Soup Caramel</p>
                                <p>{product.comment}</p>
                                <p>{product.count}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Products
