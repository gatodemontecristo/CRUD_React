import { Modal } from "./Modal";



export const Card = ({ auto, handleDeleteAuto,autoSeleccionado }) => {

  let imagen = "./imagenes/" + auto.tipo + ".svg";




  return (
    <>
    <div class="card p-3 me-4" style={{width: "18rem"}}>
      <img src={imagen} class="card-img-top"  style={{width: "150px",margin:"auto"}}/>
      <hr />
      <div class="card-body">
        <h5 class="card-title">{auto.nombre}</h5>
        <p class="card-text">
          {auto.descripcion}
        </p>
        <button class="btn btn-primary me-2"  onClick={() => autoSeleccionado(auto)} data-bs-toggle="modal" data-bs-target="#exampleModal">
        Editar
      </button>
        <button class="btn btn-danger me-2" onClick={() => handleDeleteAuto(auto.id)}>
        Eliminar
      </button>
      </div>
    </div>
 
    </>
  );
};
