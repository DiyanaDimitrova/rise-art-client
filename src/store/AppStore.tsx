//configuration of the store
import { createStore, combineReducers, Reducer, Store, compose } from 'redux'
import { UserState, userReducer } from '../main/userMain'

export interface AppState {
    users: UserState
}

const appReducer: Reducer<AppState> = combineReducers<AppState>({
    users: userReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export let appStore: Store<AppState> = createStore(rootReducer, window['devToolsExtension'] && window['devToolsExtension']())
