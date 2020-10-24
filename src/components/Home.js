import React from 'react';
import { Container, Navbar, Nav, Carousel } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import '../App.css';

//imges
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

function Home() {
    const history = useHistory();
    const salir = () => {
        return history.push("/");
    }
    return (
        <div className="App-home">
            <Container>
                <Navbar >
                    <Navbar.Brand href="/" className="app-brand">Spa SuperGirl</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#features">Procedimento</Nav.Link>
                        <Nav.Link href="/" onClick={() => salir}>Salir</Nav.Link>
                    </Navbar.Collapse>

                </Navbar>
            </Container>

            <div className="slider-home">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            </div>

          
        </div>

    );

}

export default Home;