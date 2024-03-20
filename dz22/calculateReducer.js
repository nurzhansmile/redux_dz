import { types } from "../types";

const initialState = {
  result: 0,
};

export default function calculateReducer(state = initialState, action) {
  if (action.type === types.PLUS) {

    return { result: +action.payload[0] + +action.payload[1] };
  }if(action.type === types.MINUS){
    return {result: +action.payload[0] - +action.payload[1]}
  }if(action.type === types.MULTIPLY){
    return {result: +action.payload[0] * +action.payload[1]}
  }if(action.type === types.DIVIDE){
    return {result: +action.payload[0] / +action.payload[1]}
  }
  return state;
}
