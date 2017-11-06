import * as React from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { AppState } from '../../store/AppStore'
import UserList from '../UserList/UserList'
import { withRouter } from 'react-router'
import * as actions from '../../actions/userActions'
import * as style from './style.css'
const classes = require('./App.css')

interface Props {
  userList: Array<actions.User>,
  userListLoading: Boolean,
  loadUserList: () => void,
  removeUser: (id: String) => void
}

class App extends React.Component<Props, any>{
  constructor(props) {
    super(props)
    this.state = {
      userList: props.userList
    }
  }

  public static defaultProps: Props = {
    userList: [],
    userListLoading: false,
    loadUserList: null,
    removeUser: null
  }
  componentDidMount() {
      this.props.loadUserList()
  }
  render() {
    const { userList, userListLoading } = this.props;
    return (
      <div id='appDiv' className={classes.appDiv}>
         { this.props.userList !== null && this.props.userList.length > 0 && this.props.userListLoading === false ? <UserList userList={this.props.userList} deleteUser={this.props.removeUser}></UserList> : <div>Loading ...</div>  }
      </div>
    )
  }
}
const mapStateToProps = (state: any) => ({
  userList: state.user.userList,
  userListLoading: state.user.userListLoading
})

function mapDispatchToProps(dispatch) {
  return {
    loadUserList: (): void => {
        actions.loadUserList(dispatch)
    },
    removeUser: (id: String): void => {
        actions.removeUser(id, dispatch)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
