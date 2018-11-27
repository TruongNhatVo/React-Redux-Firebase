import React, { Component } from 'react';

class Products extends Component {

    render() {

        return (
            <div className="row wow fadeIn">
                {this.props.children}
            </div>
        );
    }
}


export default Products;
