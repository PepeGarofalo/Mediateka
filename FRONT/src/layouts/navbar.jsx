import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link, useLocation } from 'react-router-dom';
import './navbar.css';
const NavbarExample = () => {
    const [activeLink, setActiveLink] = useState('/');
    const location = useLocation();

    React.useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary bgdegradate">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src="/assets/mediateka.svg" className='sizeicon' alt="Logo Mediateka" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto mt">
                            <Nav.Link
                                className={`text-white ${activeLink !== '/' ? 'text_opaciti' : ''}`}
                                as={Link}
                                to="/"
                                href="#animados"
                            >
                                Animados
                            </Nav.Link>
                            <Nav.Link
                                className={`text-white ${activeLink !== '/capsulas' ? 'text_opaciti' : ''}`}
                                as={Link}
                                to="/capsulas"
                                href="#link"
                            >
                                Cápsulas
                            </Nav.Link>
                            <Nav.Link
                                className={`text-white ${activeLink !== '/experiencias' ? 'text_opaciti' : ''}`}
                                as={Link}
                                to="/experiencias"
                                href="#link"
                            >
                                Experiencias
                            </Nav.Link>
                            <Nav.Link
                                className={`text-nowrap text-white  ${activeLink !== '/programas' ? 'text_opaciti' : ''}`}
                                as={Link}
                                to="/programas"
                                href="#link"
                            >
                                Programas TV
                            </Nav.Link>
                            <Nav.Link
                                className={`text-white ${activeLink !== '/spots' ? 'text_opaciti' : ''}`}
                                as={Link}
                                to="/spots"
                                href="#link"
                            >
                                Spots
                            </Nav.Link>
                            <Nav.Link
                                className={`text-white ${activeLink !== '/login' ? 'text_opaciti' : ''} dnonelg`}
                                as={Link}
                                to="/login"
                                href="#link"
                            >
                                Login
                            </Nav.Link>

                       
                        </Nav>
                        
                        <div className="d-flex">
                                <Nav.Link href="https://observatoriosaen.upr.edu.cu/" target="_blank">
                                    <img src="/assets/logo observ.svg" alt="Logo Observatorio" className='sizeiconObserv' title='Volver al Observatorio' />
                                </Nav.Link>
                            </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <section>
                <Outlet> </Outlet>
            </section>
        </>
    );
}

export default NavbarExample;
