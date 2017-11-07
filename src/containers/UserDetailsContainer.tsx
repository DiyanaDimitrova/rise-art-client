// container for the User Details page with connection to redux
import { connect } from 'react-redux'
import * as actions from '../actions/userActions'
import UserDetails from '../components/UserDetails/UserDetails'

const mapStateToProps = (state: any) => ({
  userDetails: state.users.userDetails,
  userLoading: state.users.userLoading
})

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: (id: String): void => {
      actions.loadUser(id, dispatch)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserDetails)
