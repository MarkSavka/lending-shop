import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProducts, modal } from '../redux/reducer'

const Products = () => {

    const products = useSelector(state => state.main.products)
    const modalState = useSelector(state => state.main.modal)
    const dispatch = useDispatch()

    const [inputState, setInputState] = useState({
        img: '',
        name: '',
        count: '',
        height: '',
        width: '',
        weight: '',
        comment: ''
    })
    const [errorValidation, setErrorValidation] = useState({
        img: false,
        name: false,
        count: false,
        height: false,
        width: false,
        weight: false,
        comment: false
    })

    const inputOnChange = (e) => {
        const newInputState = inputState;
        newInputState[e.target.className] = String(e.target.value);


        setInputState( newInputState )
    }

    const changeModal = (state) => {
        dispatch( modal( state ) )
    }

    const inputValdation = () => {
        const state = inputState;
        const error = {};

        if(state.img.length < 10 || state.img.length > 100){
            error.img = true
        } else error.img = false
        
        if(state.name.length < 4 || state.img.length > 20){
            error.name = true
        } else error.name = false

        if(state.count < 1 || state.count > 100){
            error.count = true
        } else error.count = false

        if(state.height < 1 || state.height > 1000){
            error.height = true
        } else error.height = false

        if(state.width < 1 || state.width > 1000){
            error.width = true
        } else error.width = false

        if(state.weight < 1 || state.weight > 1000){
            error.weight = true
        } else error.weight = false

        if(Object.keys(error).length){
            setErrorValidation(error)
        }
    }

    const openSingleProduct = () => {

    }

    return (
        <div className="wrapper">
            <nav className="navbar">
                <button onClick={ () => changeModal(!modalState) } >New product</button>
                <p className="sort" >Sort</p>
            </nav>

            <div className="products-block">
                
                { products && products.map(product => {
                    return(
                        <Link to={`/${product.id}`} className="item" key={product.id}>
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
                        </Link>
                    )
                })}

                { modalState && 
                    <div className="modal-window">
                        <div className="modal">
                        <h1>Add new Product</h1>

                            <div className="form">
                                <input type="text"                      onChange={ (e) => inputOnChange(e)} className="img"     placeholder="img" />
                                {errorValidation.img && <p className="invalid-input" >img link must be between 10 and 100 symbol</p>}

                                <input type="text"                      onChange={ (e) => inputOnChange(e)} className="name"    placeholder="name" />
                                {errorValidation.name && <p className="invalid-input" >name  must be between 4 and 20 symbol</p>}

                                <input type="number" min="1" max="100"  onChange={ (e) => inputOnChange(e)} className="count"   placeholder="count" />
                                {errorValidation.count && <p className="invalid-input" >count must be between 1 and 100</p>}

                                <input type="number" min="1" max="1000" onChange={ (e) => inputOnChange(e)} className="height"  placeholder="height" />
                                {errorValidation.height && <p className="invalid-input" >height must be between 1 and 1000</p>}

                                <input type="number" min="1" max="1000" onChange={ (e) => inputOnChange(e)} className="width"   placeholder="width" />
                                {errorValidation.width && <p className="invalid-input" >width must be between 1 and 1000</p>}

                                <input type="number" min="1" max="1000" onChange={ (e) => inputOnChange(e)} className="weight"  placeholder="weight" />
                                {errorValidation.weight && <p className="invalid-input" >weight must be between 1 and 1000</p>}

                                <input type="text"                      onChange={ (e) => inputOnChange(e)} className="comment" placeholder="comment" />

                            </div>

                            <div className="form-controllers" >
                                <button className="console" onClick={ () => console.log(inputState)} >Console</button>
                                <button className="close" onClick={ () => changeModal(!modalState)} >Close</button>
                                <button className="add"   onClick={ () => inputValdation()} >Add</  button>
                            </div>
                            
                        </div>
                    </div> 
                }
            </div>
        </div>
    )
}

export default Products
