import {ACTIONS} from './actionsType'
export const toggleAuth = ()=>{
    return {
      type:ACTIONS.AUTH_TOGGLE,
    }
    
  }
export const handleAdd=()=>{
 return {
  type:ACTIONS.ADD
 }
}
export const handleAddNum = (amount) =>{
  return {
    type:ACTIONS.Add_Num,
    payload:amount,
  }
}
export const handleSub = ()=>{
  return {
    type:ACTIONS.SUBTRACT
   }
}
export const handleRes = ()=>{
  return {
    type:ACTIONS.RESET
   }
}