
import { createStore, compose} from 'redux';
import {notesReducer} from "./reducers/notesReducer";
import {applyMiddleware} from "redux/es/redux";
import ReduxThunk from 'redux-thunk';
export const store = configureStore();
export function configureStore(initialState){
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));
  return createStore(notesReducer, initialState, enhancer);
}