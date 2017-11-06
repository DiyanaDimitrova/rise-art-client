import * as React from 'react'
import { Link } from 'react-router'

export interface UserRowProps{
  user: any
  deleteUser: (id: String) => void
}

export default class UserRow extends React.Component<UserRowProps, any> {
  constructor(props) {
    super(props)
    this.deleteUser = this.deleteUser.bind(this)
  }
  deleteUser = (event)  => {
    this.props.deleteUser(this.props.user._id)
  }
  render () {
    const user = this.props.user
    return (
      <tr>
        <td>{user.name}</td>
        <td><Link to={`/user/${user._id}`} activeClassName="active">Profile</Link></td>
        <td><Link to={`/user/${user._id}/${user.name}`} activeClassName="active">Update</Link></td>
        <td><button onClick={this.deleteUser}>Delete</button></td>
      </tr>

    )
  }
}
