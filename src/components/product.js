import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Product extends Component {

    onDelete = (id) => {
        this.props.deleteItem(id)
    }

    render() {

        return (
            <div className="col-lg-3 col-md-6 mb-4">
                <Link className="card" to={this.props.path}>
                    <div className="view overlay">
                        <img src={this.props.productImageUrl} className="card-img-top" alt="" />
                        <div className="mask rgba-white-slight"></div>
                    </div>

                    <div className="card-body text-center">
                        <div className="grey-text">
                            <h5>{this.props.productCategory}</h5>
                        </div>
                        <h5>
                            <strong>
                                <p className="dark-grey-text">{this.props.name}
                                    {/* <span className="badge badge-pill danger-color">NEW</span> */}
                                </p>
                            </strong>
                        </h5>
                        <h4 className="font-weight-bold blue-text">
                            <strong>{`${this.props.price}`} $</strong>
                        </h4>
                    </div>
                </Link>

            </div>
        );
    }
}


export default Product;
