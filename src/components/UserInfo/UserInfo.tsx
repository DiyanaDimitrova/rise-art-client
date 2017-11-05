import * as React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { User } from '../../actions/userActions'

export interface UserInfoProps{
  userDetails: User
}

export default class UserInfo extends React.Component<UserInfoProps, any> {
  constructor(props) {
    super(props)
  }
  render () {
    const userDetails = this.props.userDetails
    console.log(typeof this.props.userDetails)

    return (
      <div>
        <div>
          <img src={userDetails.avatar.toString()}/>
        </div>
        <div>{userDetails.name}</div>
        <div>{userDetails.email}</div>
        <div>{userDetails.bio}</div>
        <div>{userDetails.company.name}</div>
        <div>{userDetails.address.city}</div>
        <div>{userDetails.address.streetAddress}</div>
        <div>{userDetails.address.streetName}</div>
        <div>{userDetails.address.zipCode}</div>
      </div>

    )
  }
}
