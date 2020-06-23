import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import { globalSaga } from "../saga/globalSaga";
import { profileDataReducer, blogDataReducer, modalStatusReducer } from './reducer';

//store는 state, action 을 받아서 case에 따라서 return 값& default 설정 

export const getProfileData = (state) => state.profileDataReducer;
export const getBlogData = (state) => state.blogDataReducer;
export const getModalStatusData = (state) => state.modalStatusReducer;

//rootReducer = combineReducer
const rootReducer = combineReducers({
  profileDataReducer,
  blogDataReducer,
  modalStatusReducer
});

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(globalSaga);