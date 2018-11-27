import React from 'react';

const CartButton = (props) => {
	return (
    <ul className="navbar-nav nav-flex-icons">
      <li className="nav-item">
        <a className="nav-link waves-effect">
          <span className="badge red z-depth-1 mr-1"> 5 </span>
          <i className="fa fa-shopping-cart"></i>
          <span className="clearfix d-none d-sm-inline-block"> Cart </span>
        </a>
      </li>
    </ul>
  );
}
export default CartButton;