import { Action } from 'redux'
import * as r from '../reducers/userReducer'
import * as a from '../actions/userActions'

export interface User {
  _id: String
  name: String
  email: String
  avatar: String
  bio: String
  company: {
    name: String
  }
  address: {
    zipCode: Number
    city: String
    streetName: String
    streetAddress: String
  }
}


export interface UserState {
  userListLoading: Boolean,
  userList: Array<User>
  userLoading: Boolean,
  userDetails: User,
  message: String,
  isOpen: Boolean
}

export const initialState: UserState = {
  userListLoading: false,
  userList: [],
  userLoading: false,
  userDetails: null,
  message: null,
  isOpen: false
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
  [a.DELETE_USER_FAILURE]: r.deleteUserFailureReducer,
  [a.CLEAR_MESSAGE_DATA]: r.clearMessageDataReducer
}

export function userReducer(state: UserState = initialState, action: Action): UserState {
  let reducer = reducers[action.type]
  if (reducer) {
    return reducer(state, action)
  }
  return state
}
