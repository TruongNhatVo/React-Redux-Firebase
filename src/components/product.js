import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Product extends Component {

    onDelete = (id) => {
        this.props.deleteItem(id)
    }

    render() {

        return (
            <div className="col-lg-3 col-md-6 mb-4">

                <Link to={this.props.path}>
                    <div className="card">

                        <div className="view overlay">
                            <img src={this.props.productImageUrl} className="card-img-top" alt="" />
                            <a>
                                <div className="mask rgba-white-slight"></div>
                            </a>
                        </div>

                        <div className="card-body text-center">
                            <a href="" className="grey-text">
                                <h5>{this.props.productCategory}</h5>
                            </a>
                            <h5>
                                <strong>
                                    <a href="" className="dark-grey-text">{this.props.name}
                                        {/* <span className="badge badge-pill danger-color">NEW</span> */}
                                    </a>
                                </strong>
                            </h5>

                            <h4 className="font-weight-bold blue-text">
                                <strong>{`${this.props.price}`} $</strong>
                            </h4>

                        </div>

                    </div>
                </Link>

            </div>
        );
    }
}


export default Product;
