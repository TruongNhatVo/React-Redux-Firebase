import React, { Component, Fragment } from 'react'
import TabControl from './../components/tabControl'

const tabItems = [
  {
    name : 'Login',
    link : '#login'
  }, 
  {
    name : 'Sign up',
    link : '#signUp'
  }
]

export default class TabAuthentication extends Component {
  render() {
    return (
      <Fragment>
        <TabControl 
          tabItems={tabItems}
        />
        <div class="tab-pane fade in show active" id="login" role="tabpanel">
          { this.props.loginComponents }
        </div>
        <div class="tab-pane fade" id="signUp" role="tabpanel">
          { this.props.registerComponents }
        </div>
      </Fragment>
    )
  }
}
