import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import FormCitas from './components/FormCitas';

function App() {
  return (
    <>
    <Container className="my-4">
      <h1 className="display-1 fw-bold">Ejercicio N°9</h1>
      <h2 className="display-2">Pacientes de Veterinaria</h2>
    </Container>
    <FormCitas></FormCitas>
    </>
  )
}

export default App
