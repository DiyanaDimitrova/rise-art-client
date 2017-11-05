import * as React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import * as actions from '../../actions/userActions'
import UserInfo from '../UserInfo/UserInfo'
// import Header from '../../../components/Header/Header'
const classes = require('./UserDetails.css')

export interface UserDetailsProps{
  userDetails: actions.User,
  userLoading: Boolean,
  params: any,
  loadUser: (id: String) => void
}

export class UserDetails extends React.Component<UserDetailsProps, any> {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.loadUser(this.props.params.id)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== null;
  }

  render() {
      return (
        <div >
          {this.props.userDetails !== null && this.props.userLoading === false &&
            <UserInfo userDetails={this.props.userDetails}/>}
        </div>
      )
    }
}

const mapStateToProps = (state: any) => ({
  userDetails: state.user.userDetails,
  userLoading: state.user.userLoading
})

const mapDispatchToProps = (dispatch) => {
    return {
      loadUser: (id: String): void => {
          actions.loadUser(id, dispatch)
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserDetails)
