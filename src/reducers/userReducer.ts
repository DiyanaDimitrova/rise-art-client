import { UserState } from '../main/userMain'
import { Action } from 'redux'
import * as actions from '../actions/userActions'
export function getUserListReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.GET_USER_LIST) {
        let newState = (<any>Object).assign({}, state)
        newState.userListLoading = true
        return newState
    } else {
        return state
    }
}

export function getUserListSuccessReducer(state: UserState, action: Action): UserState {
  console.log('tdsadsadasdsadasdsadasdasdsest')
    if (action.type === actions.GET_USER_LIST_SUCCESS) {
      console.log('test')
        let _action = action as actions.GetUserListAction
        // let newState = (<any>Object).assign({}, state)
        // newState.userList = (<any>Object).assign([], _action.userList)
        // newState.userListLoading = false
        return { ...state, userList: _action.userList}
    } else {
      console.log('kur')
        return state
    }
}
export function setUserListFailureReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.GET_USER_LIST_FAILURE) {
        let _action = action as actions.GetUserListAction
        let newState = (<any>Object).assign({}, state)
        newState.userList = (<any>Object).assign([], _action.userList)
        newState.userListLoading = false
        return newState
    } else {
        return state
    }
}
export function getUserReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.GET_USER) {
        let newState = (<any>Object).assign({}, state)
        newState.userLoading = true
        return newState
    } else {
        return state
    }
}

export function getUserSuccessReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.GET_USER_SUCCESS) {
        let _action = action as actions.GetUserAction
        let newState = (<any>Object).assign({}, state)
        newState.userDetails = (<any>Object).assign([], _action.userDetails)
        newState.userLoading = false
        return newState
    } else {
        return state
    }
}
export function setUserFailureReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.GET_USER_FAILURE) {
        let _action = action as actions.GetUserAction
        let newState = (<any>Object).assign({}, state)
        newState.userDetails = (<any>Object).assign({}, _action.userDetails)
        newState.userLoading = false
        return newState
    } else {
        return state
    }
}

export function updateUserSuccessReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.UPDATE_USER_SUCCESS) {
        let _action = action as actions.UserAction
        let newState = (<any>Object).assign({}, state)
        newState.message = _action.message
        return newState
    } else {
        return state
    }
}

export function updateUserFailureReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.UPDATE_USER_FAILURE) {
        let _action = action as actions.UserAction
        let newState = (<any>Object).assign({}, state)
        newState.message = _action.message
        return newState
      } else {
        return state
    }
}

export function deleteUserSuccessReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.DELETE_USER_SUCCESS) {
        let _action = action as actions.UserAction
        let newState = (<any>Object).assign({}, state)
        newState.message = _action.message
        return newState
    } else {
        return state
    }
}

export function deleteUserFailureReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.DELETE_USER_FAILURE) {
        let _action = action as actions.UserAction
        let newState = (<any>Object).assign({}, state)
        newState.message = _action.message
        return newState
      } else {
        return state
    }
}
