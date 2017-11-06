import * as React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../store/AppStore'
import UserList from '../UserList/UserList'
import Message from '../Message/Message'
import * as actions from '../../actions/userActions'
import * as main from '../../main/userMain'
import * as style from './style.css'
const classes = require('./App.css')

interface Props {
  userList: Array<main.User>,
  userListLoading: Boolean,
  message: String,
  isOpen: Boolean,
  loadUserList: () => void,
  removeUser: (id: String) => void,
  clearMessage: () => void
}


class App extends React.Component<Props, any>{
  constructor(props) {
    super(props)
  }

  public static defaultProps: Props = {
    userList: [],
    userListLoading: false,
    message: null,
    isOpen: false,
    loadUserList: null,
    removeUser: null,
    clearMessage: null
  }
  componentDidMount() {
      this.props.loadUserList()
  }

  render() {
    const { userList, userListLoading } = this.props;
    return (
      <div id='appDiv' className={classes.appDiv}>
         {this.props.isOpen === true && <Message messageText={this.props.message} closeMessage={this.props.clearMessage} />}
         {this.props.userList !== null && this.props.userList.length > 0 && this.props.userListLoading === false ? <UserList userList={this.props.userList} deleteUser={this.props.removeUser}></UserList> : <div>Loading ...</div>}
      </div>
    )
  }
}
const mapStateToProps = (state: any) => ({
  userList: state.user.userList,
  userListLoading: state.user.userListLoading,
  message: state.user.message,
  isOpen: state.user.isOpen
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
