import ACTIONS from "./actionType"

export const handleAdd = ()=>{
    return{
        type:ACTIONS.ADD,
    }
}
export const handleSub = ()=>{
    return {
        type:ACTIONS.SUBTRACT
    } 
}

export const handleAddFive = (amount)=>{
    return{
    type :ACTIONS.ADD_NUM,
    payload:amount
    }
}
export const handleReset = ()=>{
    return {
        type:ACTIONS.RESET
    }
}
export const handleAuthToggle = () =>{
    return{
        type:ACTIONS.AUTH_TOGGLE
    }
}