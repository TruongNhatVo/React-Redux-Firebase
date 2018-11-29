import React, { Component } from 'react'

export default class ProductSlider extends Component {

  showProductSubItems = (subItems) => {
    subItems = subItems.map((subItem, index) => {
      return <img
        key={index}
        src={subItem.productImageUrl}
        className={ index > 0 ? 'img-responsive w-25' : 'img-responsive' }
        alt="Image" />
      })
    return subItems
  }

  showProductItem = (items) => {
    items = Object.values(items).map((item, index) => {
      return <div
        key={index}
        className={index == 0 ? "carousel-item active" : "carousel-item"}
      >
        <div className="row d-flex justify-content-around">
          {this.showProductSubItems(item)}
        </div>
      </div>
    })
    return items
  }

  render() {

    let { products } = this.props

    return (
      <div id="carouselId" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          {this.showProductItem(products)}
        </div>
        <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
}
