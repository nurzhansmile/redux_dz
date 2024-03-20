import {types} from "./types";

// export function changeTitleAction(){
//     return{
//         type: types.CHANGE_TITLE
//     }
// }

// export function withParamsAction(title){
//     return {
//         type: types.WITH_PARAMS,
//         payload: title
//     }
// }

// export function changeInputActions(value){
//      return {
//         type: types.VALUE,
//         payload: value
//      }
// }

// export function addUserAction(name){
//     return{
//         type: types.ADD,
//         payload: name
//     }
// }

// export function deleteAllUsersAction(){
//     return{
//         type: types.DELETE
//     }
// }

// export function  plusAction(x, y){
//     return{
//     type: types.PLUS,
//     payload: [x, y]
// }
// }

// export function minusAction(x,y){
//     return{
//         type: types.MINUS,
//         payload: [x,y]
//     }
// }

// export function multiplyAction(x,y){
//     return{
//         type: types.MULTIPLY,
//         payload: [x,y]
//     }
// }
// export function divideAction(x,y){
//     return{
//         type: types.DIVIDE,
//         payload: [x,y]
//     }
// }

export function asyncFunctionAction() {
    return function (){
        setTimeout(()=>{
            alert ("Hello")
        }, 2000)
    }
}