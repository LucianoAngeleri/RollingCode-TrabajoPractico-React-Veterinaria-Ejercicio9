import { useState, useEffect } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";
import ListaCitas from "./ListaCitas";

class Cita {
    constructor(mascota, propietario, fecha, hora, sintomas) {
        this.mascota = mascota;
        this.propietario = propietario;
        this.fecha = fecha;
        this.hora = hora;
        this.sintomas = sintomas;
    }
}

const FormCitas = () => {
    const citasGuardadas = JSON.parse(localStorage.getItem('citas')) || [];

    const [mascota, setMascota] = useState("")
    const [propietario, setPropietario] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")
    const [sintomas, setSintomas] = useState("")

    const [citas, setCitas] = useState(citasGuardadas)

    const fechaActual = new Date().toISOString().split('T')[0];
    
    useEffect(() => {
        localStorage.setItem('citas', JSON.stringify(citas));
      }, [citas]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const cita = new Cita(mascota, propietario, fecha, hora, sintomas)
        setCitas([...citas, cita])


        setMascota("")
        setPropietario("")
        setFecha("")
        setHora("")
        setSintomas("")
    }
    const borrarCita = (index) =>{
        let citasCopia = citas.filter((cita, indiceCita)=> indiceCita !== index)
        setCitas(citasCopia)
    }

    return (
        <>
         <Container className="my-3">
            <Card className="shadow">
                <Card.Header className="p-4">
                    <Card.Title className="text-primary">Llenar el formulario para crear una cita</Card.Title>
                </Card.Header>
                <Form onSubmit={handleSubmit}>
                    <Card.Body className="p-4">
                        <Form.Group controlId="inputMascota" className="d-flex gap-3 mb-4 justify-content-center align-items-center">
                            <Form.Label className="fw-bold w-25">Nombre de Mascota</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el nombre de la mascota.." maxLength="20" minLength="3" required value={mascota} onChange={(e) => setMascota(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="inputPropietario" className="d-flex gap-3 mb-4 justify-content-center align-items-center">
                            <Form.Label className="fw-bold w-25">Nombre de Dueño</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el nombre del dueño..." maxLength="20" minLength="3" required value={propietario} onChange={(e) => setPropietario(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className="d-flex gap-3 mb-4 justify-content-center align-items-center">
                            <Form.Label htmlFor="fecha" className="fw-bold">Fecha</Form.Label>
                            <Form.Control type="date" id="fecha" required value={fecha} onChange={(e) => setFecha(e.target.value)} min={fechaActual} ></Form.Control>
                            <Form.Label htmlFor="hora" className="fw-bold">Hora</Form.Label>
                            <Form.Control type="time" id="hora" required value={hora} onChange={(e) => setHora(e.target.value)} max="21:00" min="08:00"></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="inputSintomas" className="d-flex gap-3 mb-4 justify-content-center align-items-center">
                            <Form.Label className="fw-bold w-25">Sintomas</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese los sintomas que observa..." required maxLength="100" minLength="5" value={sintomas} onChange={(e) => setSintomas(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Card.Body>
                    <Card.Footer className="text-center py-4">
                        <Button type="submit" variant="primary" className="rounded-pill shadow">Agregar nueva Cita</Button>
                    </Card.Footer>
                </Form>
            </Card>
        </Container>
        <Container className="my-4">
            <ListaCitas citas={citas} borrarCita={borrarCita}></ListaCitas>
        </Container>
        </>
    );
};

export default FormCitas;