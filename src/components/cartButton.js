import React from 'react';

const CartButton = (props) => {
	return (
    <ul className="navbar-nav nav-flex-icons">
      <li className="nav-item">
        <p className="nav-link waves-effect mb-0">
          <span className="badge red z-depth-1 mr-1"> 5 </span>
          <i className="fa fa-shopping-cart"></i>
          <span className="clearfix d-none d-sm-inline-block"> Cart </span>
        </p>
      </li>
    </ul>
  );
}
export default CartButton;