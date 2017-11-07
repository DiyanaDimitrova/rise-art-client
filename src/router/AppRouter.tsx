// definition of the routes and logo of the system
import * as React from 'react'
import { Router, browserHistory, Route } from 'react-router'
import { AppState } from '../store/AppStore'
import { connect } from 'react-redux'
import UserEdit from '../containers/UserEditContainer'
import UserDetails from '../containers/UserDetailsContainer'
import App from '../containers/AppContainer'

export class AppRouter extends React.Component<any, AppState> {

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img src="https://d3czolpekmjw7h.cloudfront.net/build/static/media/ra-logo.558ef972.svg" className="logo d-inline-block align-top" alt="" />
          </a>
        </nav>
        <div className="container">
          <Router ref='routeRef' history={browserHistory} >
            <Route path='/' component={App} />
            <Route path='/user/:id' component={UserDetails} />
            <Route path='/user/:id/:name' component={UserEdit} />
          </Router>
        </div>
      </div>
    )
  }
}

export default connect()(AppRouter)
