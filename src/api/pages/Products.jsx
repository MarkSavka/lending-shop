import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/reducer'

const Products = () => {

    const count = useSelector(state => state.main.count)
    const dispatch = useDispatch()

    return (
        <div className="wrapper">
            <p>Hello Mark</p>
            <p>count : {count}</p>
            <button onClick={() => dispatch(increment())} > + </button>
            <button onClick={() => dispatch(decrement())} > - </button>
        </div>
    )
}

export default Products
