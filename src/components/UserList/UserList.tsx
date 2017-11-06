import * as React from 'react'
import UserRow from '../UserRow/UserRow'

export interface UserListProps{
  userList: any
  deleteUser: (id: String) => void
}

export default class UserList extends React.Component<UserListProps, any> {
  render () {
    const userList = this.props.userList
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Profile</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.tableRows(userList)}
        </tbody>
      </table>
    )
  }

  tableRows (userList) {
    return userList.map((user, index) => {
      return (<UserRow user={user} key={index} deleteUser={this.props.deleteUser} />)
    })
  }
}
