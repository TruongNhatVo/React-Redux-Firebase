import products from './products'
import productEdit from './editProduct'
import category from './category'
import product from './product'
import { combineReducers } from 'redux'

const productsReducers = combineReducers({
    products,
    productEdit,
    category,
    product
})

export default productsReducers