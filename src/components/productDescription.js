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
              <span>$100</span>
            </p>

            <p className="lead font-weight-bold">Description</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor suscipit libero eos atque quia ipsa sint voluptatibus!
              Beatae sit assumenda asperiores iure at maxime atque repellendus maiores quia sapiente.</p>

            <AddCartForm />

          </div>

        </div>
    )
  }
}
