import Products from './../components/products'
import Product from './../components/product'
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as actions from './../actions/index'
import Pagination from "react-js-pagination"
import ProductCategory from './../components/productCategory'
import { filter } from 'lodash'

class ProductsPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activePage: 1,
            itemPerPage: 8
        }

    }

    componentDidMount() {
        this.props.fetchAllProducts()

    }

    handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`)
        this.setState({ activePage: pageNumber })
    }

    onSelectCategory = (category) => {
        this.props.filterCategory(category)
    }

    onDeleteHandler = (id) => {
        this.props.deleterProduct(id)
    }

    showProducts = (products) => {
        var result = null
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <Product
                        key={index}
                        path={`/product/${product.id}`}
                        deleteItem={this.onDeleteHandler}
                        {...product}
                    />
                )
            })
        } else {
            return <h1>No products</h1>
        }
        return result
    }

    render() {

        let indexOfLastTodo = this.state.activePage * this.state.itemPerPage
        let indexOfFirstTodo = indexOfLastTodo - this.state.itemPerPage
        let products = this.props.products.slice(indexOfFirstTodo, indexOfLastTodo)

        let refCategory = this.props.category
        if (refCategory !== 'All') {
            products = filter(products, (value) => {
                console.log(refCategory);
                return value.productCategory == refCategory
            })
        }

        return (
            <Fragment>
                <ProductCategory
                    onFilterCategory={(val) => this.onSelectCategory(val)}
                />
                <Products>
                    {this.showProducts(products)}
                </Products>
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemPerPage}
                    totalItemsCount={this.props.products.length}
                    pageRangeDisplayed={8}
                    onChange={this.handlePageChange}
                />
            </Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        products: state.products,
        category: state.category
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actions.fetchProductRequest())
        },
        deleterProduct: (id) => {
            dispatch(actions.deleteProductRequest(id))
        },
        filterCategory: (value) => {
            dispatch(actions.filterCategory(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage)
