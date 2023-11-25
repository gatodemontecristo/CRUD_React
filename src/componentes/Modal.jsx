import React from 'react'
export const Modal = ({idSeleccionado,setNombreEditValue,setDescEditValue,setTipoEditValue,nombreEditValue,descEditValue,tipoEditValue,handleActualizarAuto}) => {
    


  const onSubmit = (event) => {
    event.preventDefault();
    if (nombreEditValue.trim().length <= 1) return;

    const todo = {
      id: idSeleccionado,
      nombre: nombreEditValue,
      descripcion: descEditValue,
      tipo: tipoEditValue,
    };
    console.log(todo);
    handleActualizarAuto(todo);
  };

  return (
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form
          style={{ with: "30%" }}
          class="p-3 w-100"
        >
          <label  class="form-label">
            Nombre
          </label>
          <input
            type="text"
            placeholder="Ingrese nombre ..."
            className="form-control"
            id="inputNombre"
            value={nombreEditValue}
            onChange={(e) => {
              setNombreEditValue(e.target.value)
          }}
          />
          <label  class="form-label">
            Descripción
          </label>
          <textarea
            className="form-control"
            id="areaDescripcion"
            rows="4"
            cols="50"
            placeholder="Ingrese descripción ..."
            value={descEditValue}
            onChange={(e) => {
              setDescEditValue(e.target.value)
          }}
          ></textarea>
          <label >Tipo</label>
          <select value={tipoEditValue}  onChange={setTipoEditValue} class="form-control" id="selectTipo">
            <option value="mecanico">Mecanico</option>
            <option value="salud">Salud</option>
            <option value="hogar">Hogar</option>
            <option value="servicio">Servicio</option>
          </select>
          <button type="submit" className="btn btn-outline-primary mt-1">
            Agregar
          </button>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={(event) => onSubmit(event)}>Save changes</button>
      </div>
    </div>
  </div>
  </div>
  )
}
