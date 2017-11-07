import { UserState } from '../main/userMain'
import { Action } from 'redux'
import * as actions from '../actions/userActions'
export function getUserListReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.GET_USER_LIST) {
        return { ...state, userListLoading: true }
    } else {
        return state
    }
}

export function getUserListSuccessReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.GET_USER_LIST_SUCCESS) {
        let _action = action as actions.GetUserListAction
        return { ...state, userList: _action.userList, userListLoading: false }
    } else {
        console.log('kur')
        return state
    }
}
export function setUserListFailureReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.GET_USER_LIST_FAILURE) {
        let _action = action as actions.GetUserListAction
        return { ...state, userList: [], userListLoading: false }
    } else {
        return state
    }
}
export function getUserReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.GET_USER) {
        return { ...state, userLoading: true }
    } else {
        return state
    }
}

export function getUserSuccessReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.GET_USER_SUCCESS) {
        let _action = action as actions.GetUserAction
        return { ...state, userDetails: _action.userDetails, userLoading: false }
    } else {
        return state
    }
}
export function setUserFailureReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.GET_USER_FAILURE) {
        let _action = action as actions.GetUserAction
        return { ...state, userDetails: null, userLoading: false }
    } else {
        return state
    }
}

export function updateUserSuccessReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.UPDATE_USER_SUCCESS) {
        let _action = action as actions.UserAction
        return { ...state, message: _action.message, isOpen: true }
    } else {
        return state
    }
}

export function updateUserFailureReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.UPDATE_USER_FAILURE) {
        let _action = action as actions.UserAction
        return { ...state, message: _action.message, isOpen: true }
    } else {
        return state
    }
}

export function deleteUserSuccessReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.DELETE_USER_SUCCESS) {
        let _action = action as actions.UserAction
        return { ...state, message: _action.message, isOpen: true }
    } else {
        return state
    }
}

export function deleteUserFailureReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.DELETE_USER_FAILURE) {
        let _action = action as actions.UserAction
        return { ...state, message: _action.message, isOpen: true }
    } else {
        return state
    }
}

export function clearMessageDataReducer(state: UserState, action: Action): UserState {
    if (action.type === actions.CLEAR_MESSAGE_DATA) {
        return { ...state, message: '', isOpen: false }
    } else {
        return state
    }
}
