import React, { Component } from 'react'
import SignUpForm from './../components/signUpForm'
import * as actions from './../actions/login.js'
import { connect } from 'react-redux'

class SignUpPage extends Component {

  onSignUpUser = (user) => {
    this.props.signUpUserAct(user)
  }
  
  shouldComponentUpdate(nextProps) {
    const {history } = this.props
    if( nextProps.user !== this.props.user ) {
      history.push('product')
    }
    return true
  }

  render() {
    return (
      <div className="materialContainer mt-4 mb-4">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-sm-8 col-md-6">
            <SignUpForm 
              signUpWithUser={(user) => this.onSignUpUser(user)}
              errorSignUp={this.props.errorSignUp}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    errorSignUp : state.error,
    user : state.login
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    signUpUserAct: (user) => {
      dispatch(actions.signUpRequest(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
