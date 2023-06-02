import { Card, Row } from "react-bootstrap";
import CardCitas from "./CardCitas";

const ListaCitas = ({ citas }) => {
    return (
        <Row className="g-3 py-3">
            <h3 className="display-3">Administra las citas aquí</h3>
            <hr />
            {citas.length > 0 ? (
                citas.map((cita) => (
                    <CardCitas
                        mascota={cita.mascota}
                        propietario={cita.propietario}
                        fecha={cita.fecha}
                        hora={cita.hora}
                        sintomas={cita.sintomas}></CardCitas>
                ))) : (<h4 className="display-5 text-bg-danger rounded-5 p-4 text-center">No hay citas.</h4>)

            }
        </Row>
    );
};

export default ListaCitas;
