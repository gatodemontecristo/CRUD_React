import React, { useEffect, useState } from "react";
import { Card } from "./Card.jsx";
import { useAutos } from "../hooks/useAutos.js";
import MyModal from "./MyModal.jsx";
import { useAgregar } from "../hooks/useAgregar.js";
import { useEditar } from "../hooks/useEditar.js";
import { MyForm } from "./MyForm.jsx";

export const AutoApp = () => {
  const [filtrado, setFiltrado] = useState(false);
  const [seccionFiltro, setSeccionFiltro] = useState("");
  const [showAlertRemove, setShowAlertRemove] = useState(false);
  const [autoRemover, setAutoRemover] = useState("");

  useEffect(() => {
    let timeoutId;
    if (showAlertRemove) {
      timeoutId = setTimeout(() => {
        setShowAlertRemove(false);
      }, 4000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showAlertRemove]);

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
  const mostrarTodo = () => {
    setFiltrado(false);
    setboton({
      botonServicio: false,
      botonHogar: false,
      botonSalud: false,
      botonMecanico: false,
      botonTodo: true,
    });
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
                class={`btn btn-light me-2 ${
                  boton.botonServicio ? "active" : ""
                }`}
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
                class={`btn btn-light me-2 ${
                  boton.botonMecanico ? "active" : ""
                }`}
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
                onClick={mostrarTodo}
              >
                Todos
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div class="d-flex flex-row">
        <div class="d-flex flex-column w-75">
          <div
            class={`alert alert-danger mt-3 ms-5 me-5 ${
              showAlertRemove ? "d-block" : "d-none"
            }`}
            role="alert"
          >
            Se eliminó el carro <strong>{autoRemover}</strong> con éxito.
          </div>
          <div
            class="d-flex flex-wrap flex-row justify-content-center w-100 pt-2"
          >
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
                      setAutoRemover={setAutoRemover}
                      setShowAlertRemove={setShowAlertRemove}
                    ></Card>
                  ))
              : autos.map((auto) => (
                  <Card
                    key={auto.id}
                    auto={auto}
                    handleDeleteAuto={handleDeleteAuto}
                    autoSeleccionado={autoSeleccionado}
                    handleShow={handleShow}
                    setAutoRemover={setAutoRemover}
                    setShowAlertRemove={setShowAlertRemove}
                  ></Card>
                ))}
          </div>
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
          mostrarTodo={mostrarTodo}
        ></MyForm>
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
