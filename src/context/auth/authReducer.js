import { types } from "../../types/types";

const initialState = {
  logged: false,
  role: null,
  premium: false,
  user: null,
}

export const authReducer = (state = initialState, action) =>{
  switch(action.type){
    case types.login:
        return {
          ...state,
          logged: true,
          user: action.payload
        };
    case types.logout:
      return {
        logged: false,
        user: action.payload
      };
    default:
      return state;
  }
}