import React, { useState } from 'react'

export const useEditar = () => {


    const autoSeleccionado = (auto) => {
        setNombreEditValue(auto.nombre);
        setDescEditValue(auto.descripcion);
        setTipoEditValue(auto.tipo);
        setIdSeleccionado(auto.id);
      };
    
      const [nombreEditValue, setNombreEditValue] = useState("");
      const [descEditValue, setDescEditValue] = useState("");
      const [tipoEditValue, setTipoEditValue] = useState("");
      const [idSeleccionado, setIdSeleccionado] = useState("");
    
    
      
      const [show, setShow] = useState(false);
      const handleClose = () => {
        setShow(false);
      }
      
      const handleShow = () => setShow(true);





      return {
        autoSeleccionado,
        handleClose,
        handleShow,
        show,
        setShow,
        setNombreEditValue,
        setDescEditValue,
        setTipoEditValue,
        setIdSeleccionado,
        nombreEditValue,
        descEditValue,
        tipoEditValue,
        idSeleccionado
      };
}
