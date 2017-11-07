// Component with form for edit of the name of the user
import * as React from 'react'
import { User } from '../../main/userMain'
import { browserHistory } from 'react-router'

export interface UserFromProps {
  name: String
  id: String,
  editUser: (id: String, name: String) => void
}

export interface UserFromState {
  name: any
}


export default class UserFrom extends React.Component<UserFromProps, UserFromState> {
  constructor(props) {
    super(props)
    this.state = {
      name: props !== null ? props.name : ''
    }
    this.nameEntered = this.nameEntered.bind(this)
    this.updateName = this.updateName.bind(this)
  }

  nameEntered = (event) => {
    if (event.target.value) {
      this.setState({ name: event.target.value })
    }
  }
  updateName = (event) => {
    event.preventDefault()
    this.props.editUser(this.props.id, this.state.name)
    this.setState({ name: '' })
    browserHistory.push('/')
  }
  render() {
    return (
      <div className="row update">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="input-group">
            <input type='text' className="form-control" name='name' value={this.state.name} onChange={this.nameEntered} />
            <span className="input-group-btn">
              <button onClick={this.updateName} className="btn btn-secondary">Update</button>
            </span>
          </div>
        </div>
      </div>
    )
  }
}
