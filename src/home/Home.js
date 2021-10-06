
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Mega from "./mega.png";
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {login} from '../features/auth'

const Home = () => {
    const dispatch = useDispatch()
    return (
        <Container>
            <Row className="d-flex justify-content-center align-items-center">
                <Col xs={6}>
                    <Figure>
                        <Figure.Image
                            width={513}
                            height={540}
                            alt="171x180"
                            src={Mega}
                        />                    
                    </Figure>
                    
                    <h1 className="text-center mt-5 mb-5">LA MEGA-TIENDA</h1>
                    <div
                        style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                        }}
                    >
                        <Link to="/src/gestionProducto/pages/CrearProducto.js">
                            <Button variant="primary" size="sm" onClick={() => dispatch(login())}>INGRESAR</Button>{' '}
                        </Link> 
                    </div>
                </Col>
            </Row>
        </Container>

    );
};
    
export default Home;