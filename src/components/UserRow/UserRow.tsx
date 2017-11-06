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
        <td><Link to={`/user/${user._id}`} className="btn btn-primary">Profile</Link></td>
        <td><Link to={`/user/${user._id}/${user.name}`} className="btn btn-success">Update</Link></td>
        <td><button onClick={this.deleteUser} className="btn btn-danger">Delete</button></td>
      </tr>
    )
  }
}
