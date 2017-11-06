import * as React from 'react'
import UserForm from '../UserForm/UserForm'
// const classes = require('./AdminManagement.css')
export interface UserEditProps{
  params: any
  editUser: (id: String, name: String) => void
}

export default class UserEdit extends React.Component<UserEditProps, any> {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div id='adminManagementWrapper'>
        <UserForm name={this.props.params.name} id={this.props.params.id} editUser={this.props.editUser}/>
      </div>
    )
  }
}
