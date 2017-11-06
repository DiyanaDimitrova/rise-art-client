import axios from 'axios'
import { Action } from 'redux'

export const GET_USER_LIST = '@@User/GET_USER_LIST'
export const GET_USER_LIST_SUCCESS = '@@User/GET_USER_LIST_SUCCESS'
export const GET_USER_LIST_FAILURE = '@@User/GET_USER_LIST_FAILURE'

export const GET_USER = '@@User/GET_USER'
export const GET_USER_SUCCESS = '@@User/GET_USER_SUCCESS'
export const GET_USER_FAILURE = '@@User/GET_USER_FAILURE'

export const UPDATE_USER_SUCCESS = '@@User/UPDATE_USER_SUCCESS'
export const UPDATE_USER_FAILURE = '@@User/UPDATE_USER_FAILURE'

export const DELETE_USER_SUCCESS = '@@User/DELETE_USER_SUCCESS'
export const DELETE_USER_FAILURE = '@@User/DELETE_USER_FAILURE'

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

export interface GetUserListAction extends Action {
    userList: Array<User>
}
export interface GetUserAction extends Action {
    userDetails: User
}
export interface UserAction extends Action {
    message: String
}


export function getUserList(): Action {
    return { type: GET_USER_LIST } as Action
}
export function getUserListSuccess(userList: Array<User>): GetUserListAction {
  console.log('fdsfdsfdsfdsfsdf ds fds fsd fsd ku')
    return { type: GET_USER_LIST_SUCCESS, userList: userList } as GetUserListAction
}
export function setUserListFailure(userList: Array<User>): GetUserListAction {
    return { type: GET_USER_LIST_FAILURE, userList: userList} as GetUserListAction
}

export function loadUserList(dispatch: any): void {
    dispatch(getUserList())
    axios.get('/users')
      .then((response) => {
          dispatch(getUserListSuccess(response.data.users))
      })
      .catch((err) => {
          dispatch(setUserListFailure([]))
      })
}

export function getUser(): Action {
    return { type: GET_USER } as Action
}
export function getUserSuccess(userDetails: User): GetUserAction {
    return { type: GET_USER_SUCCESS, userDetails: (<any>Object).assign([], userDetails) } as GetUserAction
}
export function getUserFailure(userDetails: User): GetUserAction {
    return { type: GET_USER_FAILURE, userDetails: userDetails} as GetUserAction
}

export function loadUser(id: String, dispatch: any): void {
    dispatch(getUser())
    axios.get('/users/' + id)
      .then((response) => {
          dispatch(getUserSuccess(response.data.user))
      })
      .catch((err) => {
          dispatch(getUserFailure(null))
      })
}
export function updateUserSuccessAction(message: String): UserAction {
    return {
        type: UPDATE_USER_SUCCESS,
        message: message
    } as UserAction
}

export function updateUserFailAction(message: String): UserAction {
    return {
        type: UPDATE_USER_FAILURE,
        message: message
    } as UserAction
}
export function editUser(id: String, name: String, dispatch: any): void {
    axios.put('/users/update/' + id, { name: name })
      .then((response) => {
        console.log('AAAA' + JSON.stringify(response.data))
          dispatch(updateUserSuccessAction(response.data.message))
          loadUserList(dispatch)
      })
      .catch((err) => {
          dispatch(updateUserFailAction(err.response.data.message))
      })
}
export function deleteUserSuccessAction(message: String): UserAction {
    return {
        type: DELETE_USER_SUCCESS,
        message: message
    } as UserAction
}

export function deleteUserFailAction(message: String): UserAction {
    return {
        type: DELETE_USER_FAILURE,
        message: message
    } as UserAction
}

export function removeUser(id: String, dispatch: any): void {
    axios.delete('/users/delete/' + id)
      .then((response) => {
        console.log('AAAA' + JSON.stringify(response.data))
          dispatch(deleteUserSuccessAction(response.data.message))
          loadUserList(dispatch)
      })
      .catch((err) => {
          dispatch(deleteUserFailAction(err.response.data.message))
      })
}
