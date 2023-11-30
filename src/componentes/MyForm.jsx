

import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const MyForm = ({onNombreChange,nombreValue,onDescripcionChange,descValue,onTipoChange,handleNewAuto,tipoValue,setNombreValue,setDescValue,mostrarTodo}) => {


    const [validated, setValidated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [mensaje, setMensaje] = useState("");
   

    useEffect(() => {
      let timeoutId;
      if (showAlert) {
        
        timeoutId = setTimeout(() => {
          setShowAlert(false);
        }, 4000);
      }
      return () => {
        clearTimeout(timeoutId);
      };
    }, [showAlert]);



  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    }else{
      event.preventDefault();
      if (nombreValue.trim().length <= 0 || descValue.trim().length <= 0) return;
  
      const todo = {
        id: new Date().getTime(),
        nombre: nombreValue,
        descripcion: descValue,
        tipo: tipoValue.toLowerCase(),
      };
      setMensaje(nombreValue);
      handleNewAuto(todo);
      setNombreValue("");
      setDescValue("");
      setValidated(false);
      setShowAlert(true);
      mostrarTodo();
    }

    
   
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}  
    className="p-5 w-25 mt-5 needs-validation" style={{ borderLeft: '2px solid #8080805e', height:'100%'}}>
     
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
      
      <div class={`alert alert-info mt-3 ${showAlert ? "d-block" : "d-none"}`} role="alert">
      
          Se registró el carro <strong>{mensaje}</strong> con éxito.
        </div>
    </Form>
  )
}
