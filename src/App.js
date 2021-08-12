import './App.sass';
import Products from './api/pages/Products';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProducts } from './api/redux/reducer';
import getAllProducts from './api/service/getAllProducts';

function App() {

  const dispatch = useDispatch()

  useEffect( () => {
    async function getProduct(){
        const productsArray = await getAllProducts();
        dispatch( addProducts( productsArray ) )
    }
    getProduct()
})

  return (
    <Products />
  )
}

export default App;
