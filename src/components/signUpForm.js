import React, { Component } from 'react'
import Form from "react-jsonschema-form"

const schema = {
  type: "object",
  properties: {
    UserName: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    password: {
      type: 'string',
      title: 'Password'
    },
    comfirmPassword: {
      type: 'string',
      title: 'Comfirm password'
    }
  }
}

const validate = (formData,errors) => {
  if (formData.password !== formData.comfirmPassword) {
    errors.comfirmPassword.addError("Your password is not match");
  }
  return errors;
}

const UISchema = {
  UserName: {
    'ui:autofocus': true
  },
  email: {
    'ui:autofocus': true,
    'ui:widget': 'email'
  },
  password: {
    'ui:widget': 'password'
  },
  comfirmPassword: {
    'ui:widget': 'password'
  }
}

export default class SignUpForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: {
      }
    }
  }


  onChangeValue = (val) => {
    this.setState({
      user: val.formData
    })
  }

  addUser = (user) => {
    this.props.user(user)
  }

  render() {

    return (
      <div className="card card-signin my-5 wow fadeIn">
        <div className="card-body">
          <h5 className="card-title text-center">Sign up for new account</h5>
          <Form
            className="form-sign-up"
            uiSchema={UISchema}
            schema={schema}
            formData={this.state.user}
            onChange={(changeValue) => this.onChangeValue(changeValue)}
            onSubmit={() => this.addUser(this.state.user)}
            validate={validate}
            showErrorList={true}
          >
            <button
              className="btn btn-lg btn-secondary btn-block text-uppercase" type="submit"
            >
              Sign Up
            </button>
          </Form>
        </div>
      </div >
    )
  }
}