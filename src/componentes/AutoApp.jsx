import React, { useState } from "react";
import { Card } from "./Card.jsx";
import { useAutos } from "../hooks/useAutos.js";
import MyModal from "./MyModal.jsx";

export const AutoApp = () => {
  const { handleNewAuto, autosCount, handleDeleteAuto,handleActualizarAuto, autos } = useAutos();

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

  const onSubmit = (event) => {
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
  };

  const autoSeleccionado = (auto) => {
    console.log(auto);
    setNombreEditValue(auto.nombre);
    setDescEditValue(auto.descripcion);
    setTipoEditValue(auto.tipo);
    setIdSeleccionado(auto.id);
  };

  const [nombreEditValue, setNombreEditValue] = useState("");
  const [descEditValue, setDescEditValue] = useState("");
  const [tipoEditValue, setTipoEditValue] = useState("");
  const [idSeleccionado, setIdSeleccionado] = useState("");

  // const onNombreChange = ({ target }) => {
  //   setNombreEditValue(target.value);
  // };
  // const onDescripcionChange = ({ target }) => {
  //   setDescEditValue(target.value);
  // };
  // const onTipoChange = ({ target }) => {
  //   setTipoEditValue(target.value);
  // };
  
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  }
  const handleSave = (event) => {
    event.preventDefault();
    if (nombreEditValue.trim().length <= 1) return;

    const todo = {
      id: idSeleccionado,
      nombre: nombreEditValue,
      descripcion: descEditValue,
      tipo: tipoEditValue,
    };
    handleActualizarAuto(todo);

    setShow(false);
  }
  const handleShow = () => setShow(true);

  return (
    <>
      <h1 class="text-center">SERVICIOS</h1>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">
                Todos
              </a>
              <a class="nav-link" href="#">
                Autos
              </a>
              <a class="nav-link" href="#">
                Salud
              </a>
              <a class="nav-link" href="#">
                Hogar
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div class="d-flex flex-row">
        <div
          class="d-flex flex-wrap flex-row justify-content-center w-75 pt-5"
          style={{ with: "70%" }}
        >
          {autos.map((auto) => (
            <Card
              key={auto.id}
              auto={auto}
              handleDeleteAuto={handleDeleteAuto}
              autoSeleccionado={autoSeleccionado}
              handleShow={handleShow}
            ></Card>
          ))}
        </div>

        <form
          style={{ with: "30%" }}
          onSubmit={(event) => onSubmit(event)}
          class="p-5 w-25 needs-validation"
          novalidate
        >
          <label for="inputNombre" class="form-label">
            Nombre
          </label>
          <input
            type="text"
            placeholder="Ingrese nombre ..."
            class="form-control"
            id="inputNombre"
            onChange={onNombreChange}
            value={nombreValue}
            required
          />
          <div class="invalid-feedback">
      Please select a valid state.
    </div>
          <label for="areaDescripcion" class="form-label">
            Descripción
          </label>
          <textarea
            class="form-control"
            id="areaDescripcion"
            rows="4"
            cols="50"
            placeholder="Ingrese descripción ..."
            onChange={onDescripcionChange}
            value={descValue}
            required
          ></textarea>
           <div class="invalid-feedback">
      Please select a valid state.
    </div>
          <label for="selectTipo">Tipo</label>
          <select onChange={onTipoChange} class="form-control" id="selectTipo">
          <option value="mecanico">Mecanico</option>
            <option value="salud">Salud</option>
            <option value="hogar">Hogar</option>
            <option value="servicio">Servicio</option>
          </select>
          <button type="submit" class="btn btn-outline-primary mt-1 w-100">
            Agregar
          </button>
        </form>
      </div>
      {/* MODAL */}
   



      <MyModal
           setNombreEditValue={setNombreEditValue}
           setDescEditValue={setDescEditValue}
           setTipoEditValue={setTipoEditValue}
   
           nombreEditValue={nombreEditValue}
           descEditValue={descEditValue}
           tipoEditValue={tipoEditValue}
             
        handleClose={handleClose}
        show={show}
        handleSave={handleSave}
      />
    </>
  );
};
