export const Card = ({
  auto,
  handleDeleteAuto,
  autoSeleccionado,
  handleShow,
  setAutoRemover,
  setShowAlertRemove,
}) => {
  let imagen = "./imagenes/" + auto.tipo + ".svg";

  return (
    <div class="card p-3 me-4 mt-4" style={{ width: "18rem" }}>
      <img
        src={imagen}
        class="card-img-top"
        style={{ width: "150px", margin: "auto" }}
      />
      <hr />
      <div class="card-body">
        <h5 class="card-title">{auto.nombre}</h5>
        <p class="card-text">{auto.descripcion}</p>
        <p class="card-text fw-bold">Tipo : {auto.tipo}</p>
        <button
          class="btn btn-primary me-2"
          onClick={() => {
            autoSeleccionado(auto);
            handleShow();
          }}
        >
          Editar
        </button>
        <button
          class="btn btn-danger me-2"
          onClick={() => {
            setAutoRemover(auto.nombre);
            setShowAlertRemove(true);
            handleDeleteAuto(auto.id);
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
