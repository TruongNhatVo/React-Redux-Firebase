import React, { Component } from 'react'
import SignUpForm from './../components/signUpForm'
import * as actions from './../actions/login.js'
import { connect } from 'react-redux'

class SignUpPage extends Component {

  onSignUpUser = (user) => {
    console.log(user)
  }

  render() {
    return (

      <div className="materialContainer mt-4 mb-4">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-sm-8 col-md-6">
            <SignUpForm 
              user={(user) => this.onSignUpUser(user)}
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
