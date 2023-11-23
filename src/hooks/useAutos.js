import React, { useReducer } from 'react'
import { autoReducer } from '../componentes/autoReducer';
const initialState = [
  {
    id:1,
    nombre: 'Auxilio Mecanico',
    descripcion: 'Auto para realizar tareas mecanicas',
    tipo: 'salud',
},
{
    id:2,
    nombre: 'Electricidad',
    descripcion: 'Auto para realizar mantenimiento electrico',
    tipo: 'salud',
},
{
  id:3,
  nombre: 'Chofer de reemplazo',
  descripcion: 'Servicio de chofer para movilizarse a todas partes.',
  tipo: 'servicio',
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
