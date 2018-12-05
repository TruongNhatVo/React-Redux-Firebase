import React, { Component } from 'react'
import Form from "react-jsonschema-form"
import { connect } from 'react-redux'
import * as actions from './../actions/product.js'
import { storage } from './../firebase/config'

const schema = {
    type: "object",
    properties: {
        name: { type: "string", title: "Product Name" },
        price: { type: "number", title: "Product price" },
        status: { type: "boolean", title: "Product status", default: false },
        productCategory: {
            type: "string",
            enum: [
                "Shirts",
                "Sport wears",
                "Outwears",
            ],
            enumNames: [
                "Shirts",
                "Sport wears",
                "Outwears"
            ],
            default: 'Shirts'

        }
    }
}

const log = (type) => console.log.bind(console, type)

class ProductActionPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            formValue: {
                productImageUrl: ''
            },
            productImage: null
        };
    }

    onChangeValue = (data) => {
        this.setState({
            formValue: data.formData
        })
    }

    onPickUpImage = (e) => {
        if (e.target.files[0]) {
            const productImage = e.target.files[0]
            this.setState(() => ({ productImage }))

        }
    }

    onUploadImage = () => {
        const { productImage } = this.state;
        return new Promise((resolve, reject) => {
            const uploadImage = storage.ref(`images/${productImage.name}`).put(productImage)
            uploadImage.on('state_changed',
                (snapshot) => {
                    const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                    console.log('Upload is ' + progress + '% done');
                },
                (error) => {
                    reject(error)
                },
                () => {
                    storage.ref('images')
                        .child(productImage.name)
                        .getDownloadURL()
                        .then(url => {
                            resolve(url)
                        })
                }
            );
        })
    }

    onSubmitFormHandler = (dataForm) => {
        let { history } = this.props

        this.onUploadImage()
            .then(url => {
                this.setState({
                    formValue: {
                        ...this.state.formValue,
                        productImageUrl: url
                    }
                },
                    () => {
                        let { formValue } = this.state
                        formValue.id ?
                            this.props.updateProduct(formValue) :
                            this.props.saveProduct(formValue)
                        history.goBack()
                    })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Add products form</h3>
                </div>
                <div className="panel-body">
                    <Form schema={schema}
                        formData={this.state.formValue}
                        onChange={(changeValue) => this.onChangeValue(changeValue)}
                        onSubmit={() => this.onSubmitFormHandler(this.state.formValue)}
                        onError={log("errors")}>
                        <div className="form-group field field-string">
                            <label className="control-label" htmlFor="imageThumb" >PickUp image</label><br />
                            <input type="file" id="imageThumb" onChange={this.onPickUpImage} />
                        </div>
                        <button className="btn btn-primary" type="submit">Add product</button>
                    </Form>
                </div>
            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        formDataReducer: state.productEdit
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        saveProduct: (product) => {
            dispatch(actions.addProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
