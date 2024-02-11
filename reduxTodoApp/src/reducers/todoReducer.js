
const initialState = [];

export const todoReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADDTODO':
            return [...state,action.data];
        case 'DELETETODO':
            const deletedItem = state.filter((item)=>item.id!==action.id)
            return deletedItem;
        case 'EDITTODO':
            const editItem = action.data;
            let updatedArr = []
            state.map((item)=>{
                if(item.id===editItem.id){
                    item.id=editItem.id;
                    item.message=editItem.message
                    item.completed = editItem.completed
                }
                updatedArr.push(item)
            })
            return updatedArr
        case 'CHECKBOX':
            let filteredArr = []
            state.map((item)=>{
                if(item.id===action.id){
                    item.completed = !item.completed
                }
                filteredArr.push(item)
            })
            return filteredArr
        default:return state;
    }
}