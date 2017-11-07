import * as React from 'react'
import { User } from '../../main/userMain'

export interface UserInfoProps {
  userDetails: User
}

export default class UserInfo extends React.Component<UserInfoProps, any> {
  constructor(props) {
    super(props)
  }
  render() {
    const userDetails = this.props.userDetails
    return (
      <div className="container">
        <div className="jumbotron profile-container">
          <div className="row">
            <div className="col-md-4 col-xs-12 col-sm-6 col-lg-4">
              <img src={userDetails.avatar.toString()} alt="stack photo" className="user profile image" />
            </div>
            <div className="col-md-8 col-xs-12 col-sm-6 col-lg-8">
              <div className="container">
                <h2>{userDetails.name}</h2>
              </div>
              <hr />
              <p>
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span className='info'>{userDetails.email}</span>
              </p>
              <p>
                <i className="fa fa-address-card" aria-hidden="true"></i>
                <span className='info'>{userDetails.bio}</span>
              </p>
              <p>
                <i className="fa fa-building" aria-hidden="true"></i>
                <span className='info'>{userDetails.company.name}</span>
              </p>
              <p>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span className='info'>{userDetails.address.city}</span>
              </p>
              <p>
                <i className="fa fa-road" aria-hidden="true"></i>
                <span className='info'>{userDetails.address.streetAddress}</span>
              </p>
              <p>
                <i className="fa fa-street-view" aria-hidden="true"></i>
                <span className='info'>{userDetails.address.streetName}</span>
              </p>
              <p>
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span className='info'>{userDetails.address.zipCode}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
