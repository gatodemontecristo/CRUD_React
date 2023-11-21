import React, { useReducer } from 'react'
import { autoReducer } from '../componentes/autoReducer';
const initialState = [
  {
    id:1,
    nombre: 'Auxilio Mecanico',
    descripcion: 'Auto para realizar tareas mecanicas',
    tipo: 'hogar',
}
];
const init = () => {
    return JSON.parse(localStorage.getItem("autos")) || [];
  };
export const useAutos = () => {
    const [autos, dispatch] = useReducer(autoReducer, initialState);

    const handleNewAuto = (auto) => {
        const action = {
          type: "crear nuevo auto",
          payload: auto,
        };
    
        dispatch(action);
      };
      const handleDeleteAuto = (id) => {
        dispatch({
          type: "eliminar auto",
          payload: id,
        });
      };
      return {
        handleNewAuto,
        autosCount : autos.length,
        handleDeleteAuto,
        autos,
      };
}
