import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import CartButton from './cartButton'
import NavButtonToggle from './navButtonToggle'

const menu = [
	{
		path: '/',
		label: 'Home',
		exact: true
	},
	{
		path: '/products',
		label: 'Products',
		exact: false
	},
	{
		path: '/about',
		label: 'About',
		exact: false
	},
	{
		path: '/product/add',
		label: 'Add product',
		exact: false
	}
]

const MenuLink = ({ path, exact, label }) => {
	return <Route
		path={path}
		exact={exact}
		children={({ match }) => (
			<li className={match ? "nav-item active" : "nav-item"}>
				<Link className="nav-link waves-effect"  to={path}>{label}
					<span className="sr-only">(current)</span>
					{match ? <span className="sr-only">(current)</span> : ""}
				</Link>
			</li>
		)}
	/>
}

class Menu extends Component {

	render() {
		return (
			<nav className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
				<div className="container">

					<a className="navbar-brand waves-effect">
						<strong className="blue-text">MDB</strong>
					</a>

					<NavButtonToggle />

					<div className="collapse navbar-collapse" id="navbarSupportedContent">

						<ul className="navbar-nav mr-auto">
							{this.showMenu(menu)}
						</ul>
						<CartButton />
					</div>

				</div>
			</nav>
		);
	}

	showMenu = (item) => {
		if (item.length > 0) {
			item = item.map((value, index) => {
				return <MenuLink
					key={index}
					path={value.path}
					label={value.label}
					exact={value.exact}
				/>
			})
		}
		return item;
	}

}

export default Menu;
