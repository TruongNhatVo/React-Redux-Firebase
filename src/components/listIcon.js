import React, { Component } from 'react'

export default class ListIcon extends Component {
  render() {
    return (
      <div className="mb-3">
        <a>
          <span className="badge purple mr-1">Category 2</span>
        </a>
        <a>
          <span className="badge blue mr-1">New</span>
        </a>
        <a>
          <span className="badge red mr-1">Bestseller</span>
        </a>
      </div>
    )
  }
}
