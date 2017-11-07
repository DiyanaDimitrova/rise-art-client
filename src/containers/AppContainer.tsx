// container for the App page with connection to redux

import { connect } from 'react-redux'
import App from '../components/App/App'
import * as actions from '../actions/userActions'

const mapStateToProps = (state: any) => ({
  userList: state.users.userList,
  userListLoading: state.users.userListLoading,
  message: state.users.message,
  isOpen: state.users.isOpen
})

function mapDispatchToProps(dispatch) {
  return {
    loadUserList: (): void => {
      actions.loadUserList(dispatch)
    },
    removeUser: (id: String): void => {
      actions.removeUser(id, dispatch)
    },
    clearMessage: (): void => {
      actions.clearMessage(dispatch)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
