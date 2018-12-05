import React, { Component } from 'react'

export default class TabControl extends Component {

  showTabItems = (tabItems) => {
    if (tabItems.length > 0) {
      tabItems = tabItems.map((item, index) => {
        return <li className="nav-item">
          <a className={index === 0 ? 'nav-link p-3 active' : 'nav-link p-3'}
            data-toggle="tab" href={`${item.link}`} role="tab">
            <i className="fa fa-user-plus pr-2"></i>{item.name}</a>
        </li>
      })
    }
    return tabItems
  }

  render() {
    return (
      <ul
        id="myTabJust"
        className="nav nav-tabs nav-justified md-tabs"
        role="tablist"
      >
        {this.showTabItems(this.props.tabItems)}
      </ul>
    )
  }
}
