import * as React from 'react'
import UserList from '../UserList/UserList'
import Message from '../Message/Message'
import * as main from '../../main/userMain'

interface Props {
  userList: Array<main.User>,
  userListLoading: Boolean,
  message: String,
  isOpen: Boolean,
  loadUserList: () => void,
  removeUser: (id: String) => void,
  clearMessage: () => void
}


export default class App extends React.Component<Props, any> {
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
      <div>
        {this.props.isOpen === true && <Message messageText={this.props.message} closeMessage={this.props.clearMessage} />}
        {this.props.userList !== null && this.props.userList.length > 0 && this.props.userListLoading === false ? <UserList userList={this.props.userList} deleteUser={this.props.removeUser}></UserList> : <div>Loading ...</div>}
      </div>
    )
  }
}
