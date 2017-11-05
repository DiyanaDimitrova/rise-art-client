import { createStore, combineReducers, Reducer, Store, compose } from 'redux'
import { UserState, userReducer} from '../main/userMain'

const persistStore = require('redux-persist').persistStore
const autoRehydrate = require('redux-persist').autoRehydrate

export interface AppState {
    user: UserState
}

const appReducer: Reducer<AppState> = combineReducers<AppState>({
    user: userReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export let appStore: Store<AppState> = compose(autoRehydrate())(createStore)(rootReducer, window['devToolsExtension'] && window['devToolsExtension']())

persistStore(appStore)
