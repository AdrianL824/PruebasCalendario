import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "../assets/css/FormReserva.css";

function ReservationModal() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="FormReserva">
      <h2>Registrar reserva</h2>
      <h5>Ingrese informacion de la reserva</h5>
      <br />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Ambiente</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ambiente"
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid">
              Coloque un ambiente valido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Fecha </Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Fecha"
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid">
              Coloque una fecha valida.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Dia de la reserva</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Dia de la reserva"
                required
              />
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="2" controlId="validationCustom04">
            <Form.Label>Desde</Form.Label>
            <Form.Control type="time" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Coloque desde que hora.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom05">
            <Form.Label>Hasta</Form.Label>
            <Form.Control type="time" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Coloque hasta que hora.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Registrar</Button>
      </Form>
    </div>
  );
}

export default ReservationModal;
