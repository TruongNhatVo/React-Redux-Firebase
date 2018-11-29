import * as types from './../contanst/types'
import { filter } from 'lodash'
import { database } from './../firebase/config'

const getDataFirebase = (endpoint, child = '') => {
    return new Promise((resolve, reject) => {
        database.ref(endpoint)
            .once('value')
            .then(snapshot => {
                const fbData = []
                snapshot.forEach(item => {
                    fbData.push({
                        id: item.key,
                        ...item.val()
                    })
                })
                resolve(fbData)
            })
            .catch(err => {
                reject(err)
            })
    })

}

export const fetchProductsAct = (products) => {
    return {
        type: types.FETCH_PRODUCTS,
        products
    }
}

export const fetchProductByIdAct = (product) => {
    return {
        type: types.FETCH_PRODUCTBYID,
        product
    }
}


export const fetchProductsByCategoryAct = (products) => {
    return {
        type: types.FETCH_PRODUCTSBYCATEGORY,
        products
    }
}

export const addProductAct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
}


export const filterCategory = (category) => {
    return {
        type: types.FILTER_CATEGORY,
        category
    }
}


export const fetchProductRequest = () => {
    return dispatch => {
        getDataFirebase('products').then(fbData => {
            dispatch(fetchProductsAct(fbData))
        })
    }
}

export const addProductRequest = (product) => {
    return dispatch => {
        return database.ref('products')
            .push(product)
            .then(ref => {
                dispatch(addProductAct({
                    id: ref.key,
                    ...product
                }))
            })
    }
}

export const fetchProductsByCategoryRequest = (category) => {
    return dispatch => {
        getDataFirebase('products')
            .then(products => {
                const filterProducts = filter(products, (value) => {
                    return value.productCategory === category
                })
                dispatch(fetchProductsByCategoryAct(filterProducts))
            })
    }
}


export const fetchProductByIdRequest = (id) => {
    return dispatch => {
        database.ref('products').child(id)
            .once('value')
            .then(ref => {
                dispatch(fetchProductByIdAct({
                    id: ref.key,
                    ...ref.val()
                }))
            })
    }
}
