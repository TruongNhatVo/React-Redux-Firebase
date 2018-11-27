import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './components/menu';
import routes from './router';
import './style/app.scss';

class App extends Component {

  switchLink = (routeItem) => {
    if (routeItem.length > 0) {
      routeItem = routeItem.map((value, i) => {
        return <Route
          key={i}
          path={value.path}
          exact={value.exact}
          component={value.main}
        />
      })
    }
    return routeItem;
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <div className="container">
            <Switch>
              {this.switchLink(routes)}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
