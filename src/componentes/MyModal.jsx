
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyModal({setNombreEditValue,setDescEditValue,setTipoEditValue,nombreEditValue,descEditValue,tipoEditValue,handleClose,show,handleSave}) {

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar auto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          <select value={tipoEditValue}  onChange={(e) => {
              setTipoEditValue(e.target.value)
          }} class="form-control" id="selectTipo">
            <option value="mecanico">Mecanico</option>
            <option value="salud">Salud</option>
            <option value="hogar">Hogar</option>
            <option value="servicio">Servicio</option>
          </select>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary"  onClick={(event)=>handleSave(event)}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;