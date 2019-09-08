import React, { Component } from 'react';
import './App.css'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import {NotFound} from './containers/NotFound'
import EmployeeContainer from './containers/EmployeeContainer'
import EmployeeDetailContainer from './containers/EmployeeDetailContainer'

//Redux related imports
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import emloyeeReducer from './store/reducers/employeeReducer'
import thunk from 'redux-thunk'

const store = createStore(emloyeeReducer, applyMiddleware(thunk))

class App extends Component {
    constructor (props) {
      super(props);
    }

    render() {
        return (
          <Provider store={store}>
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
          </Provider>
        )
    }
}

export default App;
