import products from './products'
import productEdit from './editProduct'
import category from './category'
import product from './product'
import login from './login'
import error from './error'
import { combineReducers } from 'redux'

const productsReducers = combineReducers({
    products,
    productEdit,
    category,
    product,
    login,
    error
})

export default productsReducers