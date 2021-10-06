import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from "../../shared/Header";
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const GestionarProducto = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={8}>
                        <h4 className="text-left mt-5 mb-5">Gestionar Productos</h4>
                    </Col>
                    <Col>
                        <Link to="/productNew">
                            <Button variant="primary">Crear Producto</Button>{' '}
                        </Link>
                    </Col>
                </Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>ID Producto</th>
                        <th>Descripción</th>
                        <th>Valor Unitario</th>
                        <th>Disponible</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>400101</td>
                        <td>arandela</td>
                        <td>100</td>
                        <td>Si</td>
                        </tr>
                        <tr>
                        <td>400102</td>
                        <td>bisagra</td>
                        <td>250</td>
                        <td>no</td>
                        </tr>
                        <tr>
                        <td>400103</td>
                        <td>junta</td>
                        <td>300</td>
                        <td>Si</td>
                        </tr>
                        <tr>
                        <td>400104</td>
                        <td>extractor</td>
                        <td>15000</td>
                        <td>Si</td>
                        </tr>
                        <tr>
                        <td>400105</td>
                        <td>manivela</td>
                        <td>20000</td>
                        <td>Si</td>
                        </tr>
                        <tr>
                        <td>400106</td>
                        <td>rodamiento</td>
                        <td>30000</td>
                        <td>Si</td>
                        </tr>
                    </tbody>
                    </Table>
            
            </Container>
        </div>
    );
};



export default GestionarProducto;
