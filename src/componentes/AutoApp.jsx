import React from "react";
import { Card } from "./Card.jsx";
import { useAutos } from "../hooks/useAutos.js";

export const AutoApp = () => {
    const{handleNewAuto,autosCount,handleDeleteAuto,autos}= useAutos();
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
    {
                    autos.map(auto=>(
                        <Card key={auto.id}  auto={auto} handleDeleteAuto={handleDeleteAuto} ></Card>
                    ))
                }
    
    <form>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>

    </>
  );
};
