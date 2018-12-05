import React, { Component } from 'react'

export default class ProductThumb extends Component {
  render() {
    return (
      <div className="col-md-6 mb-4 text-center">
        <img
          src={this.props.imageThumb}
          className="img-fluid" 
          alt={this.props.alt} />
      </div>
    )
  }
}
