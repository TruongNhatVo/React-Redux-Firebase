import React, { Component } from 'react'
import LoginForm from './../components/loginForm'
import * as actions from './../actions/login.js'
import { connect } from 'react-redux'

class AuthenticationPages extends Component {

  loginWithProvider = (loginType) => {
    console.log(loginType)
    this.props.loginAction(loginType)
  }

  render() {
    return (

      <div className="materialContainer mt-4 mb-4">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-sm-8 col-md-6">
            <LoginForm 
              authenticate= {(type) => { this.loginWithProvider(type) }}
            />
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    loginAction: (type) => {
      dispatch(actions.signInWithProvider(type))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationPages);
