import React, { Component } from 'react'

export default class AddCartForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      value: 1
    }
  }

  oneChangeQuality = (event) => {
    this.setState({value: event.target.value});
  }

  onAddCart = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form
        className="d-flex justify-content-left"
        onSubmit={this.onAddCart}
      >
        <input
          id="cart-form"
          type="number"
          value={this.state.value}
          aria-label="Search"
          className="form-control"
          onChange={this.oneChangeQuality}
        />
        <button
          className="btn btn-primary btn-md my-0 p waves-effect waves-light"
          type="submit"
        >
          Add to cart
          <i className="fa fa-shopping-cart ml-1" />
        </button>

      </form>
    )
  }
}
