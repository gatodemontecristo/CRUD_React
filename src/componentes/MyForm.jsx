

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const MyForm = ({onNombreChange,nombreValue,onDescripcionChange,descValue,onTipoChange,handleNewAuto,tipoValue,setNombreValue,setDescValue}) => {


    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    }else{
      event.preventDefault();
      if (nombreValue.trim().length <= 1 || descValue.trim().length <= 1) return;
  
      const todo = {
        id: new Date().getTime(),
        nombre: nombreValue,
        descripcion: descValue,
        tipo: tipoValue.toLowerCase(),
      };
      handleNewAuto(todo);
      setNombreValue("");
      setDescValue("");
      setValidated(false);
    }

    
   
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}
    className="p-5 w-25 needs-validation">
     
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingrese nombre ..."
            id="inputNombre"
            onChange={onNombreChange}
            value={nombreValue}
          />
          <Form.Control.Feedback type="invalid">
            Porfavor ingrese un nombre
          </Form.Control.Feedback>

          <Form.Label>Descripción</Form.Label>
          <Form.Control
            required
            as="textarea"
            style={{ height: '100px' }}
            type="text"
            placeholder="Ingrese descripción ..."
            id="areaDescripcion"
            onChange={onDescripcionChange}
            value={descValue}
          />
          <Form.Control.Feedback type="invalid">
            Porfavor ingrese un nombre
          </Form.Control.Feedback>

          <Form.Label>Tipo</Form.Label>
          <Form.Select onChange={onTipoChange} id="selectTipo">
          <option value="mecanico">Mecanico</option>
            <option value="salud">Salud</option>
            <option value="hogar">Hogar</option>
            <option value="servicio">Servicio</option>
         </Form.Select>
       
      <Button type="submit" className="mt-3 w-100">Agregar</Button>
    </Form>
  )
}
