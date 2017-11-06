import * as React from 'react'
import { browserHistory } from 'react-router'
import UserInfo from '../UserInfo/UserInfo'
import * as main from '../../main/userMain'
const classes = require('./UserDetails.css')

export interface UserDetailsProps{
  userDetails: main.User,
  userLoading: Boolean,
  params: any,
  loadUser: (id: String) => void
}

export default class UserDetails extends React.Component<UserDetailsProps, any> {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.loadUser(this.props.params.id)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== null;
  }

  render() {
      return (
        <div >
          {this.props.userDetails !== null && this.props.userLoading === false ?
            <UserInfo userDetails={this.props.userDetails}/> : <div>Loading ...</div>}
        </div>
      )
    }
}
