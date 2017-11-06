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
        <Router ref='routeRef' history={browserHistory} >
          <Route path='/' component={App} />
          <Route path='/user/:id' component={UserDetails}/>
          <Route path='/user/:id/:name' component={UserEdit}/>
        </Router>
    )
  }
}

export default connect()(AppRouter)
