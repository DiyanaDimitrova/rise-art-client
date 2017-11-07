// container for the User Edit page with connection to redux
import { connect } from 'react-redux'
import * as actions from '../actions/userActions'
import UserEdit from '../components/UserEdit/UserEdit'

const mapStateToProps = (state: any) => ({
})

const mapDispatchToProps = (dispatch) => {
    return {
        editUser: (id: String, name: String): void => {
            actions.editUser(id, name, dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserEdit)
