// Component for edit of the user
import * as React from 'react'
import UserForm from '../UserForm/UserForm'
export interface UserEditProps {
  params: any
  editUser: (id: String, name: String) => void
}

export default class UserEdit extends React.Component<UserEditProps, any> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <UserForm name={this.props.params.name} id={this.props.params.id} editUser={this.props.editUser} />
      </div>
    )
  }
}
