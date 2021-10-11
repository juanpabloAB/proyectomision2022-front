import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Header from "../../shared/Header";

const CrearProducto = () => {

    
    return (
        <div>
            <Row>
                <Col>
                    <h4 className="text-center mt-5 mb-5">Crear Producto</h4>
                </Col>
            </Row>
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Id Producto</Form.Label>
                                <Form.Control type="text" name="nombre" placeholder="Código debe ser único" />                                
                            </Form.Group>

                            <Form.Group className="mb-3">
                                    <Form.Label>Descripción</Form.Label>
                                    <Form.Control as="textarea" name="descripcion"rows={2} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Valor Unitario</Form.Label>
                                <Form.Control type="number" name="precio"/>                                
                            </Form.Group>

                            <Form.Group className="mb-3"> 
                                <Form.Check type="checkbox" label="Disponible" name="disponible"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Ingresar
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>    
    );
};

export default CrearProducto;
