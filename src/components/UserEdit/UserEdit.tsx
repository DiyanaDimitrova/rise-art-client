import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import * as actions from '../../actions/userActions'
import { MakeAdminRequest } from '../../main/userMain'
import UserForm from '../UserForm/UserForm'
// const classes = require('./AdminManagement.css')
export interface UserEditProps{
  params: any
  editUser: (id: String, name: String) => void
}

export class UserEdit extends React.Component<UserEditProps, any> {
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

const mapStateToProps = (state: any) => ({

})

const mapDispatchToProps = (dispatch) => {
    return {
      editUser: (id: String, name: String): void => {
          actions.editUser(id, name, dispatch)
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserEdit)