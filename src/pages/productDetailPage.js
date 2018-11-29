import React, { Component } from 'react'
import ProductThumb from './../components/productThumb'
import ProductDescription from './../components/productDescription'
import CategoryDescription from './../components/categoryDescription'
import ProductSlider from './../components/productSlider'
import * as actions from './../actions/index'
import { connect } from 'react-redux'
import { filter, chunk } from 'lodash'

class ProductDetailPage extends Component {

  componentDidMount = () => {
    let { match } = this.props
    let { id } = match.params
    this.props.fetchProductById(id)
    
  }
  
  checkScreenToRenderProduct = (val) => {
    const windowWidth = window.innerWidth
    console.log('check window width : ', windowWidth)
    if(windowWidth < 768) {
      return val = chunk(val, 1)
    } else {
      return val = chunk(val, 3)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.product !== prevProps.product) {
      const {productCategory} = this.props.product
      this.props.fetchRelateProduct(productCategory)
    }
  }


  render() {

    let {product , relatedProduct} = this.props 
    
    relatedProduct = filter(relatedProduct ,(val) => {
      return val.id !== product.id
    })
    
    window.addEventListener("ready", relatedProduct = this.checkScreenToRenderProduct(relatedProduct))

    return (
      <main>
        <div className="container dark-grey-text">
          <div className="row wow fadeIn">
            <ProductThumb 
              imageThumb={product.productImageUrl}  
              alt={product.name}
            />
            <ProductDescription 
              price={product.price}
              name={product.name}
            />
          </div>
          <hr />
          <CategoryDescription />
          <ProductSlider 
            products={relatedProduct}
          />
        </div>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    product: state.product,
    relatedProduct: state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchProductById: (id) => {
      dispatch(actions.fetchProductByIdRequest(id))
    },
    fetchRelateProduct : (val) => {
      dispatch(actions.fetchProductsByCategoryRequest(val))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage);