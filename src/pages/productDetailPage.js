import React, { Component } from 'react'
import ProductThumb from './../components/productThumb'
import ProductDescription from './../components/productDescription'

export default class ProductDetailPage extends Component {

  componentDidMount = () => {
    let { match } = this.props
  }

  render() {

    return (
      <main>
        <div className="container dark-grey-text">
          <div class="row wow fadeIn">
            <ProductThumb />
            <ProductDescription />
          </div>
        </div>
      </main>
    )
  }
}
