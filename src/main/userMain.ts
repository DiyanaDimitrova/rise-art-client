import { Action } from 'redux'
import * as r from '../reducers/userReducer'
import * as a from '../actions/userActions'

export interface MakeAdminRequest {
    usersToMakeAdmin: Array<any>
    type: String
}
export interface UserAccountRequest {
    username: String
}
export interface UserState {
  userListLoading: Boolean,
  userList: Array<a.User>
  userLoading: Boolean,
  userDetails: a.User,
  updateMessage: String,
  deleteMessage: String
}

export const initialState: UserState = {
  userListLoading: false,
  userList: [],
  userLoading: false,
  userDetails: null,
  updateMessage: '',
  deleteMessage: ''
}

const reducers = {
  [a.GET_USER_LIST]: r.getUserListReducer,
  [a.GET_USER_LIST_SUCCESS]: r.getUserListSuccessReducer,
  [a.GET_USER_LIST_FAILURE]: r.setUserListFailureReducer,
  [a.GET_USER]: r.getUserReducer,
  [a.GET_USER_SUCCESS]: r.getUserSuccessReducer,
  [a.GET_USER_FAILURE]: r.setUserFailureReducer,
  [a.UPDATE_USER_SUCCESS]: r.updateUserSuccessReducer,
  [a.UPDATE_USER_FAILURE]: r.updateUserFailureReducer,
  [a.DELETE_USER_SUCCESS]: r.deleteUserSuccessReducer,
  [a.DELETE_USER_FAILURE]: r.deleteUserFailureReducer
}

export function userReducer(state: UserState = initialState, action: Action): UserState {
    state = initialState
    let reducer = reducers[action.type]
    if (reducer) {
        return reducer(state, action)
    }
    return state
}