import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import getAllComments from '../service/getAllComments';

const Product = () => {
    const id = window.location.pathname.replace(/\//, "")
    
    const products = useSelector(state => state.main.products)
    const [comments, setComments] = useState([])
    const [existComments, setExitsComments] = useState(false)

    const [product, setProduct] = useState(null)

    useEffect( () => {
        // eslint-disable-next-line eqeqeq
        setProduct(products.find(item => item.id == id))
        
    }, [id, products])

    useEffect( () => {
        if(!existComments){
            async function getComment () {
                setComments( await getAllComments(id))
            }
            setExitsComments(true)
            getComment()
        }
    }, [existComments, id, setExitsComments])

    return(
        <div className="wrapper">
            <div className="product-grid">
                { 
                    product && 
                    <div>
                        <img src={product.imgUrl} alt="" width="150px" height="150px" />
                        <p>Name: {product.name}</p>
                        <p>Count: {product.count}</p> <br />
                        <dl>Size:
                            <li>width: {product.size.width}</li>
                            <li>height: {product.size.height}</li>
                        </dl>
                        <p>Weight: {product.weight}</p> <br />
                        <p>Comment: {product.comment}</p>
                    </div> 
                }
            </div>
            <div className="comments-block">
                {
                    product && comments &&
                    comments.map(item => {
                        return(
                            <div className="comment">
                                <p>{item.date}</p>
                                <p>{item.description}</p>
                            </div>
                        )
                    })
                    
                }
            </div>
        </div>
    )
}

export default Product
