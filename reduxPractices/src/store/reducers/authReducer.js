import ACTIONS from "../actions/actionType";

const authReducer = (state=true, action)=>{
    if(action.type===ACTIONS.AUTH_TOGGLE){
        return (state = !state)
    }
    return state;
}

export default authReducer;