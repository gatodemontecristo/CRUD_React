import React, { useState } from "react";
import { Card } from "./Card.jsx";
import { useAutos } from "../hooks/useAutos.js";
import MyModal from "./MyModal.jsx";
import { useAgregar } from "../hooks/useAgregar.js";
import { useEditar } from "../hooks/useEditar.js";
import { MyForm } from "./MyForm.jsx";

export const AutoApp = () => {
  const [filtrado, setFiltrado] = useState(false);
  const [seccionFiltro, setSeccionFiltro] = useState("");
  const [boton, setboton] = useState({
    botonServicio: false,
    botonHogar: false,
    botonSalud: false,
    botonMecanico: false,
    botonTodo: true,
  });
  const {
    autosCount,
    handleDeleteAuto,
    handleNewAuto,
    handleActualizarAuto,
    handleFiltroAuto,
    handleFiltroNada,
    autos,
  } = useAutos();

  const {
    onNombreChange,
    onDescripcionChange,
    onTipoChange,
    nombreValue,
    descValue,
    tipoValue,
    setNombreValue,
    setDescValue,
  } = useAgregar();

  const {
    autoSeleccionado,
    handleShow,
    setNombreEditValue,
    setDescEditValue,
    setTipoEditValue,
    idSeleccionado,
    nombreEditValue,
    descEditValue,
    tipoEditValue,
    handleClose,
    show,
    setShow,
  } = useEditar();

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
  };

  return (
    <>
      <h1 class="text-center">SERVICIOS ({autosCount})</h1>
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
              {/* <a class="nav-link active" aria-current="page" href="#">
                Todos
              </a> */}
              <button
                class={`btn btn-light me-2 ${boton.botonServicio ? "active" : ""}`}
                onClick={() => {
                  setSeccionFiltro("servicio");
                  setFiltrado(true);
                  setboton({
                    botonServicio: true,
                    botonHogar: false,
                    botonSalud: false,
                    botonMecanico: false,
                    botonTodo: false,
                  });
                }}
              >
                Servicio
              </button>
              <button
                class={`btn btn-light me-2 ${boton.botonHogar ? "active" : ""}`}
                onClick={() => {
                  setSeccionFiltro("hogar");
                  setFiltrado(true);
                  setboton({
                    botonServicio: false,
                    botonHogar: true,
                    botonSalud: false,
                    botonMecanico: false,
                    botonTodo: false,
                  });
                }}
              >
                Hogar
              </button>
              <button
                 class={`btn btn-light me-2 ${boton.botonSalud ? "active" : ""}`}
                onClick={() => {
                  setSeccionFiltro("salud");
                  setFiltrado(true);
                  setboton({
                    botonServicio: false,
                    botonHogar: false,
                    botonSalud: true,
                    botonMecanico: false,
                    botonTodo: false,
                  });
                }}
              >
                Salud
              </button>
              <button
             class={`btn btn-light me-2 ${boton.botonMecanico ? "active" : ""}`}
                onClick={() => {
                  setSeccionFiltro("mecanico");
                  setFiltrado(true);
                  setboton({
                    botonServicio: false,
                    botonHogar: false,
                    botonSalud: false,
                    botonMecanico: true,
                    botonTodo: false,
                  });
                }}
              >
                Mecanico
              </button>
              <button
                class={`btn btn-light me-2 ${boton.botonTodo ? "active" : ""}`}
                onClick={() => {
                  setFiltrado(false);
                  setboton({
                    botonServicio: false,
                    botonHogar: false,
                    botonSalud: false,
                    botonMecanico: false,
                    botonTodo: true,
                  });
                }}
              >
                Todos
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div class="d-flex flex-row">
        <div
          class="d-flex flex-wrap flex-row justify-content-center w-75 pt-5"
          style={{ with: "70%" }}
        >
          {/* {autos.map((auto) => (
            <Card
              key={auto.id}
              auto={auto}
              handleDeleteAuto={handleDeleteAuto}
              autoSeleccionado={autoSeleccionado}
              handleShow={handleShow}
            ></Card>
          ))} */}

          {filtrado
            ? autos
                .filter((auto) => auto.tipo === seccionFiltro)
                .map((auto) => (
                  <Card
                    key={auto.id}
                    auto={auto}
                    handleDeleteAuto={handleDeleteAuto}
                    autoSeleccionado={autoSeleccionado}
                    handleShow={handleShow}
                  ></Card>
                ))
            : autos.map((auto) => (
                <Card
                  key={auto.id}
                  auto={auto}
                  handleDeleteAuto={handleDeleteAuto}
                  autoSeleccionado={autoSeleccionado}
                  handleShow={handleShow}
                ></Card>
              ))}
        </div>
        <MyForm
          onNombreChange={onNombreChange}
          nombreValue={nombreValue}
          onDescripcionChange={onDescripcionChange}
          descValue={descValue}
          onTipoChange={onTipoChange}
          handleNewAuto={handleNewAuto}
          tipoValue={tipoValue}
          setNombreValue={setNombreValue}
          setDescValue={setDescValue}
        ></MyForm>

        {/* <form
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
          <div class="invalid-feedback">Please select a valid state.</div>
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
            value={onDescripcionChange}
            required
          ></textarea>
          <div class="invalid-feedback">Please select a valid state.</div>
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
        </form> */}
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
