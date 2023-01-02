import { types } from "../types/types";

const initialState = {
  logged: false,
  role: null,
  premium: false,
  username: null,
}

export const authReducer = (state = initialState, action) =>{
  switch(action.type){
    case types.login:
        return {
          ...state,
          logged: true,
          username: action.payload
        };
    case types.logout:
      return {
        logged: false,
        username: action.payload
      };
    default:
      return state;
  }
}