import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const CardCitas = ({mascota, propietario, fecha, hora, sintomas, borrarCita}) => {
    return (
        <Col xs={12} sm={12} md={6} lg={3}>
            <Card className="rounded-4 shadow h-100">
                <Card.Header className="border-primary d-flex flex-row gap-3">
                    <div className='bg-info rounded-circle' style={{ height:"3rem", width:"3rem" }}></div>
                    <div className='d-flex flex-column'>
                    <Card.Title className="text-primary">Mascota: {mascota}</Card.Title>
                    <Card.Subtitle className="py-3">Dueño: {propietario}</Card.Subtitle>
                    </div>
                </Card.Header>
                <Card.Body className="bg-secondary-subtle">
                    <Card.Text className="my-3">Fecha: {fecha}</Card.Text>
                    <Card.Text className="my-3">Hora: {hora}</Card.Text>
                    <Card.Text className="my-3">Síntomas: {sintomas}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-end">
                    <Button variant="danger" className="rounded-pill shadow" onClick={borrarCita}>Borrar</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default CardCitas;