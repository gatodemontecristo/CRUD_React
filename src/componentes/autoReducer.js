    
    const arregloInicial = [{
        id:1,
        nombre: 'Auxilio Mecanico',
        descripcion: 'Auto para realizar tareas mecanicas',
        tipo: 'hogar',
    }];
export const autoReducer = (initialState = arregloInicial, action) =>{


    switch(action.type){
        case 'crear nuevo auto':
            return [...initialState,action.payload]
        case 'eliminar auto':
            return initialState.filter(todo=>todo.id !== action.payload);
        default:
            return initialState;
    }


}

