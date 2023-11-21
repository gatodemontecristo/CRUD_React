const initialState = [{
    id:1,
    nombre: 'Auxilio Mecanico',
    descripcion: 'Auto para realizar tareas mecanicas',
    tipo: 'Hogar',
}]
const autoReducer = (state= initialState,action={}) =>{
    if(action.type === 'crear nuevo auto'){
        return[...state,action.payload];
    }
    return state;
}