
export const addtodos = (data)=>{
    return{
        type:'ADDTODO',
        data
    }
}

export const deleteMe = (id) =>{
    return{
        type:'DELETETODO',
        id
    }
}
export const saveUpdate = (data) =>{
    return{
        type:'EDITTODO',
        data
    }
}

export const handleCheckBox = (id) =>{
    return {
        type:'CHECKBOX',
        id
    }
}