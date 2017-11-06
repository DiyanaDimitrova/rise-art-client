import * as React from 'react'
import { User } from '../../main/userMain'

export interface UserInfoProps{
  userDetails: User
}

export default class UserInfo extends React.Component<UserInfoProps, any> {
  constructor(props) {
    super(props)
  }
  render () {
    const userDetails = this.props.userDetails
    return (
      <div>
        <div>
          <img src={userDetails.avatar.toString()}/>
        </div>
        <div>Name: {userDetails.name}</div>
        <div>Email: {userDetails.email}</div>
        <div>Bio: {userDetails.bio}</div>
        <div>Company name: {userDetails.company.name}</div>
        <div>City: {userDetails.address.city}</div>
        <div>Street Address: {userDetails.address.streetAddress}</div>
        <div>Street Name: {userDetails.address.streetName}</div>
        <div>Zip Code: {userDetails.address.zipCode}</div>
      </div>

    )
  }
}
