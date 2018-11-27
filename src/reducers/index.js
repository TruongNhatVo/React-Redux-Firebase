import products from './products'
import productEdit from './editProduct'
import category from './category'
import { combineReducers } from 'redux'

const productsReducers = combineReducers({
    products,
    productEdit,
    category
})

export default productsReducers