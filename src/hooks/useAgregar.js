import React, { useState } from 'react'

export const useAgregar = () => {

   
    const [nombreValue, setNombreValue] = useState("");
    const [descValue, setDescValue] = useState("");
    const [tipoValue, setTipoValue] = useState("mecanico");

    const onNombreChange = ({ target }) => {
        setNombreValue(target.value);
      };
      const onDescripcionChange = ({ target }) => {
        setDescValue(target.value);
      };
      const onTipoChange = ({ target }) => {
        console.log(target.value);
        setTipoValue(target.value);
      };

      

      return {
        onNombreChange,
        onDescripcionChange,
        onTipoChange,
        nombreValue,
        descValue,
        tipoValue,
        setNombreValue,
        setDescValue,
      };
}
