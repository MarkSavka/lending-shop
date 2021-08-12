import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts, modal } from '../redux/reducer'

const Products = () => {

    const products = useSelector(state => state.main.products)
    const modalState = useSelector(state => state.main.modal)
    const dispatch = useDispatch()

    const openProduct = (state) => {
        dispatch( modal( state ) )
    }

    return (
        <div className="wrapper">

            <div className="products-block">
                
                { products && products.map(product => {
                    return(
                        <div className="item" onClick={ () => openProduct(true)}>
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

                { modalState && 
                    <div className="modal-window" onClick={ () => {openProduct(false)}}>

                    </div> 
                }
            </div>
        </div>
    )
}

export default Products
