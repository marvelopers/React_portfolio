import { createStore, combineReducers, applyMiddleware } from 'redux';
import { profileData, blogData } from "./initializeData";


const modalStatus = {
  isOpen: false,
  cardId: 0
}

//Action에 따른 실행 함수 
export function profileDataReducer(state = profileData, action) {
  switch (action.type) {
    case "SET_DATA":
      console.log("action.type!", action.payload);
      console.log("action.payload.newHomedata", action.payload.newHomeData);
      const homeData = state.homeData;
      const newState = {
        ...state,
        homeData: {
          ...homeData,
          title: action.payload.newHomeData
        }
      }
      return newState;
    case "MIX_DATA":
      console.log("action.type!", action.payload);
      console.log("action.payload.mixHomedata", action.payload.mixHomeData);
      const mixhomeData = state.homeData;
      const mixnewState = {
        ...state,
        homeData: {
          ...mixhomeData,
          title: action.payload.mixHomeData
        }
      }
      return mixnewState;
    default:
      return state;
  }
}

//submit 버튼 함수 

export function blogDataReducer(state = blogData, action) {
  switch (action.type) {
    case "SET_DATA1":
      return state;
    case "ADD_POST":
      const newCard = {
        ...action.payload,
        id: Math.max.apply(null, state.card.map(e => e.id)) + 1
      }
      const newState = {
        ...state,
        card: [...state.card, newCard],

      }
      return newState;
    case "UPDATE_POST":
      const index = state.card.findIndex(card => card.id === action.payload.id);
      const cards = state.card;
      cards[index] = action.payload;
      return {
        ...state,
        card: cards
      }
    case "DELETE_POST":
      console.log('state', state);
      console.log('state.card.fitler(card => card.id !== action.payload)', state.card.filter(card => card.id !== action.payload));
      console.log('action.payload', action.payload);
      return {
        ...state,
        card: state.card.filter(card => card.id !== action.payload)
      }
    case "DELETE_REQUEST":
      console.log("DELETE_REQUEST");
      return state;
    case "TEST":
      return state;
    default:
      return state;
  }
}


//modal Reducer 함수
export function modalStatusReducer(state = modalStatus, action) {
  switch (action.type) {
    case "SET_MODAL_DATA":
      return { ...action.payload }
    default: return state;
  }
}




