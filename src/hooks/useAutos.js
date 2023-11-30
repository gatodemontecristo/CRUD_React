import React, { useEffect, useReducer } from "react";
import { autoReducer } from "../componentes/autoReducer";
const initialState = [
  {
    id: 1,
    nombre: "Auxilio Mecanico",
    descripcion: "Auto para realizar tareas mecanicas",
    tipo: "mecanico",
  },
  {
    id: 2,
    nombre: "Electricidad",
    descripcion: "Auto para realizar mantenimiento electrico",
    tipo: "mecanico",
  },
  {
    id: 3,
    nombre: "Chofer de reemplazo",
    descripcion: "Servicio de chofer para movilizarse a todas partes.",
    tipo: "servicio",
  },
  {
    id: 4,
    nombre: "Ambulancia",
    descripcion: "Ambulancia domestica para casos de emergencia.",
    tipo: "salud",
  },
  {
    id: 5,
    nombre: "Movilidad",
    descripcion: "Auto de varios asientos para el traslado de estudiantes.",
    tipo: "hogar",
  },
];
const init = () => {
  return JSON.parse(localStorage.getItem("autos")) || initialState;
};
export const useAutos = () => {
  const [autos, dispatch] = useReducer(autoReducer, initialState,init);

  useEffect(() => {
    localStorage.setItem("autos", JSON.stringify(autos));
  }, [autos]);

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
  const handleActualizarAuto = (auto) => {
    dispatch({
      type: "actualizar auto",
      payload: auto,
    });
  };
  const handleFiltroAuto = (auto) => {
    dispatch({
      type: "agregar filtro",
      payload: auto,
    });
  };
  const handleFiltroNada = () => {
    dispatch({
      type: "sin filtro",
      payload: [],
    });
  };
  return {
    handleNewAuto,
    autosCount: autos.length,
    handleDeleteAuto,
    handleActualizarAuto,
    handleFiltroAuto,
    handleFiltroNada,
    autos,
  };
};
