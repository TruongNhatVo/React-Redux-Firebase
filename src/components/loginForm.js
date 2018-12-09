import React, { Component } from 'react'
import Form from "react-jsonschema-form"
import { Link } from 'react-router-dom'

const schema = {
  type: "object",
  properties: {
    Email: {
      type: 'string'
    },
    Password: {
      type: 'string'
    }
  }
}

const UISchema = {
  Email: {
    'ui:autofocus': true
  },
  Password: {
    'ui:widget': 'password',
    
  }
}

export default class LoginForm extends Component {
  render() {
    return (
      <div className="card card-signin my-5">
        <div className="card-body">
          <h5 className="card-title text-center">Sign In</h5>
          <Form
            className="form-signin"
            uiSchema={UISchema}
            schema={schema}
          >
            <div className="custom-control mb-3 pl-0">
              <Link to="/signup">
                Sign up for new account
              </Link>
            </div>
            <button 
              className="btn btn-lg btn-primary btn-block text-uppercase" type="submit"
            >
              Sign in
            </button>
            <hr className="my-4" />
            <button 
              className="btn btn-lg btn-google btn-block text-uppercase" 
              onClick={() => this.props.authenticate('Google')}
            >
              <i className="fa fa-google mr-2"></i>
              Sign in with Google
            </button>
            <button 
              className="btn btn-lg btn-facebook btn-block text-uppercase mt-3" 
              onClick={() => this.props.authenticate('Facebook')}
            >
              <i className="fa fa-facebook-f mr-2"></i
            > 
              Sign in with Facebook
            </button>
          </Form>
        </div>
      </div >
      
    )
  }
}