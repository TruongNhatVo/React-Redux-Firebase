import React, { Component } from 'react'
import SearchProductForm from './searchProductForm'
import ProductCategoryBtnToggle from './productCategoryBtnToggle'

export default class ProductCategory extends Component {

  constructor(props) {
    super(props)
    this.state = {
      active: 0
    }
  }

  checkActive = (key,item) => {
    this.setState({
      active: key
    })
    this.props.onFilterCategory(item)
  }

  showAllCategory = (categoryArr) => {
    return categoryArr.map((item, key) => {
      return  <li
                className={this.state.active === key ? 'nav-item active' : 'nav-item'}
                onClick={() => this.checkActive(key,item)}
                key={key}
              >
                <span className="nav-link">{item}</span>
              </li>
    })
  }

  render() {

    let category = ['All', 'Shirts', 'Sport wears', 'Outwears']

    return (
      <nav className="navbar navbar-expand-lg navbar-dark mdb-color lighten-3 mt-3 mb-5">
        <span className="navbar-brand">Categories:</span>

        <ProductCategoryBtnToggle />

        <div className="collapse navbar-collapse" id="basicExampleNav">

          <ul className="navbar-nav mr-auto">
            {this.showAllCategory(category)}
          </ul>

          <SearchProductForm />

        </div>

      </nav>
    )
  }
}
