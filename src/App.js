import React, { Component } from 'react';
import './App.css'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import {NotFound} from './containers/NotFound'
import EmployeeContainer from './containers/EmployeeContainer'
import EmployeeDetailContainer from './containers/EmployeeDetailContainer'


class App extends Component {
    constructor (props) {
      super(props);
    }

    render() {
        return (
          <div>
            <Router>
              <header className="App-header">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                </ul>
                <div className="title">EMPLOYMENT MANAGEMENT</div>
              </header>
              <Switch>
                <Route exact path="/" component={EmployeeContainer} />
                <Route path="/userdetail/:id" component={EmployeeDetailContainer} />
                <Route component={NotFound} />
              </Switch>
            </Router>
          </div>
        )
    }
}

export default App;
