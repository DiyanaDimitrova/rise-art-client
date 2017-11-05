import * as React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { User } from '../../actions/userActions'
import { browserHistory } from 'react-router'

export interface UserFromProps{
  name: String
  id: String,
  editUser: (id: String, name: String) => void
}

export interface UserFromState{
  name: any
}


export default class UserFrom extends React.Component<UserFromProps, UserFromState> {
  constructor(props) {
    super(props)
    console.log(props)
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
  updateName = (event)  => {
    event.preventDefault()
    this.props.editUser(this.props.id, this.state.name)
    this.setState({name : ''})
    browserHistory.push('/')
  }
  render () {
    return (
      <div>
         <input type='text' name='name' value={this.state.name} onChange={this.nameEntered}/>
         <button onClick={this.updateName}>Update</button>
      </div>
    )
  }
}
