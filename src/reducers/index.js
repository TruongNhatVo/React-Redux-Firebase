import products from './products'
import productEdit from './editProduct'
import category from './category'
import product from './product'
import login from './login'
import { combineReducers } from 'redux'

const productsReducers = combineReducers({
    products,
    productEdit,
    category,
    product,
    login
})

export default productsReducers