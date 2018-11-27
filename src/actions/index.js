import * as types from './../contanst/types';
import apiCall from './../utils/apiCaller';
import { database } from './../firebase/config'


export const fetchProductAct = (products) => {
    return {
        type: types.FETCH_PRODUCTS,
        products
    }
}

export const fetchProductRequest = () => {
    return dispatch => {
        return database.ref('products').once('value').then(snapshot => {
            const products = [];
            snapshot.forEach(item => {
                products.push({
                    id: item.key,
                    ...item.val()
                });
            });
            dispatch(fetchProductAct(products));
        });
    }
}

export const deleteProductAct = (id) => {
    return {
        type: types.DELETE_PRODUCT,
        id
    }
}

export const deleteProductRequest = (id) => {
    return dispatch => {
        return apiCall(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(deleteProductAct(res.data.id));
        })
    }
}

export const addProductAct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product
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

export const fetchProductByIdAct = (product) => {
    return {
        type: types.FETCH_PRODUCTBYID,
        product
    }
}

export const fetchProductByIdRequest = (id) => {
    return dispatch => {
        return apiCall(`products/${id}`, 'GET', null).then(res => {
            dispatch(fetchProductByIdAct(res.data))
        })
    }
}

export const updateProductAct = (newProductValue) => {
    return {
        type: types.UPDATE_PRODUCT,
        newProductValue
    }
}

export const updateProductRequest = (newProductValue) => {
    return dispatch => {
        return apiCall(`products/${newProductValue.id}`, 'PUT', newProductValue).then(res => {
            dispatch(updateProductAct(res.data))
        })
    }
}

export const filterCategory = (category) => {
    return {
        type: types.FILTER_CATEGORY,
        category
    }
}
