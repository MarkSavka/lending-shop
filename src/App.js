import './App.sass';
import Products from './api/pages/Products';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProducts } from './api/redux/reducer';
import getAllProducts from './api/service/getAllProducts';

import {
   BrowserRouter as Router,
   Switch,
   Route,
} from "react-router-dom";
import Product from './api/pages/Product';


function App() {

   const dispatch = useDispatch()

   useEffect(() => {
      async function getProduct() {
         const productsArray = await getAllProducts();
         dispatch(addProducts(productsArray))
      }
      getProduct()
   })

   return (
      <Router>
         <Switch>
            <Route exact path="/" >
               <Products />
            </Route>
            <Route path="/:id">
               <Product />
            </Route>
         </Switch>
      </Router>
   )
}

export default App;
