import React, { Component } from 'react'
import AddCartForm from './../components/AddCartForm'
import ListIcon from './../components/listIcon'

export default class ProductDescription extends Component {
  render() {
    return (
      <div className="col-md-6 mb-4">

          <div className="p-4">

            <ListIcon />

            <p className="lead">
              <span>{this.props.price} $</span>
            </p>

            <p className="lead font-weight-bold">{this.props.name}</p>

            <p>
              {this.props.description ? this.props.description : 'No Description' }
            </p>

            <AddCartForm />

          </div>

        </div>
    )
  }
}
