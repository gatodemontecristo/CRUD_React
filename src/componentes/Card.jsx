import React from "react";

export const Card = ({ auto, handleDeleteAuto }) => {

  let imagen = "./imagenes/" + auto.tipo + ".svg";
  return (
    <div class="card" style={{width: "18rem"}}>
      <img src={imagen} class="card-img-top"  />
      <div class="card-body">
        <h5 class="card-title">{auto.nombre}</h5>
        <p class="card-text">
          {auto.descripcion}
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
