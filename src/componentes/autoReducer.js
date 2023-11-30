    
    const arregloInicial = [];
export const autoReducer = (initialState = arregloInicial, action) =>{


    switch(action.type){
        case 'crear nuevo auto':
            return [...initialState,action.payload]
        case 'eliminar auto':
            return initialState.filter(todo=>todo.id !== action.payload);
        case 'actualizar auto':
            return initialState.map(todo=>{
                if(todo.id === action.payload.id){
                    return{
                            ...todo,
                            nombre:action.payload.nombre,
                            descripcion:action.payload.descripcion,
                            tipo:action.payload.tipo
                        }
                    }
                    return todo;
                });
        default:
            return initialState;
    }


}

