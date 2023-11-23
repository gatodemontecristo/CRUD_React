import React, { useState } from "react";
import { Card } from "./Card.jsx";
import { useAutos } from "../hooks/useAutos.js";

export const AutoApp = () => {
  const { handleNewAuto, autosCount, handleDeleteAuto, autos } = useAutos();

  const [nombreValue, setNombreValue] = useState("");
  const [descValue, setDescValue] = useState("");
  const [tipoValue, setTipoValue] = useState("Mecanico");

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
    if (nombreValue.trim().length <= 1) return;

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
          class="d-flex flex-row justify-content-center w-75 pt-5"
          style={{ with: "70%" }}
        >
          {autos.map((auto) => (
            <Card
              key={auto.id}
              auto={auto}
              handleDeleteAuto={handleDeleteAuto}
            ></Card>
          ))}
        </div>

        <form
          style={{ with: "30%" }}
          onSubmit={(event) => onSubmit(event)}
          class="p-5 w-25"
        >
          <label for="inputNombre" class="form-label">
            Nombre
          </label>
          <input
            type="text"
            placeholder="Ingrese nombre ..."
            className="form-control"
            id="inputNombre"
            onChange={onNombreChange}
            value={nombreValue}
          />
          <label for="areaDescripcion" class="form-label">
            Descripción
          </label>
          <textarea
            className="form-control"
            id="areaDescripcion"
            rows="4"
            cols="50"
            placeholder="Ingrese descripción ..."
            onChange={onDescripcionChange}
            value={descValue}
          ></textarea>
          <label for="selectTipo">Tipo</label>
          <select onChange={onTipoChange} class="form-control" id="selectTipo">
            <option>Mecanico</option>
            <option>Salud</option>
            <option>Hogar</option>
            <option>Servicio</option>
          </select>
          <button type="submit" className="btn btn-outline-primary mt-1">
            Agregar
          </button>
        </form>
      </div>
    </>
  );
};
