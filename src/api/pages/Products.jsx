import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts, modal } from '../redux/reducer'

const Products = () => {

    const products = useSelector(state => state.main.products)
    const modalState = useSelector(state => state.main.modal)
    const dispatch = useDispatch()

    const changeModal = (state) => {
        dispatch( modal( state ) )
    }

    const openSingleProduct = () => {

    }

    return (
        <div className="wrapper">
            <nav className="navbar">
                <button onClick={ () => changeModal(true) } >New product</button>
                <p>Sort</p>
            </nav>

            <div className="products-block">
                
                { products && products.map(product => {
                    return(
                        <div className="item" >
                            <img 
                                height="100px" 
                                width="100px"  
                                src={product.imgUrl} 
                                alt=""
                            />
                            <div className="description">
                                <p>{product.name}</p>
                                <p>{product.comment}</p>
                                <p>{product.count}</p>
                            </div>
                        </div>
                    )
                })}

                { modalState && 
                    <div className="modal-window" onClick={ () => {changeModal(false)}}>
                        <div className="modal" onClick>
                            <input type="text" className="img" placeholder="img" />
                            <input type="text" className="name" placeholder="name" />
                            <input type="text" className="count" placeholder="count" />
                            <input type="text" className="width" placeholder="height" />
                            <input type="text" className="weight" placeholder="weight" />
                            <input type="text" className="comment" placeholder="comment" />


                            
                        </div>
                    </div> 
                }
            </div>
        </div>
    )
}

export default Products
