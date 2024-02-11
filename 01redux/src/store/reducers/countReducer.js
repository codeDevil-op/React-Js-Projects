import { ACTIONS } from '../actions/actionsType';
const countReducer = (state = 0, action)=>{

    if(action.type === ACTIONS.SUBTRACT){
       return state-1
    }
    if(action.type === ACTIONS.ADD){
       return state+1
    }
    if(action.type===ACTIONS.Add_Num){
      return state + action.payload
    }
    if(action.type===ACTIONS.RESET){
       return state =0
    }
    return state;
};

export default countReducer