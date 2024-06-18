/* eslint-disable no-unused-vars */
// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './components.css';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ usersmedia: username, pasworddd: password })
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                navigate('/formulario');
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al iniciar sesión');
        }
    };

    return (
        <MDBContainer className="my-5">
            <MDBCard>
                <MDBRow className='g-0'>
                    <MDBCol md='6'>
                        <MDBCardImage src='/assets/ajuste-admin.jpg' alt="login form" className='rounded-start w-100' />
                    </MDBCol>
                    <MDBCol md='6'>
                        <MDBCardBody className='d-flex flex-column'>
                            <div className='d-flex flex-row mt-2'>
                                <img src="/assets/mediateka.svg" className='size-logo-login' alt="Logo Mediateka" />
                                <span className="h1 fw-bold mb-0"></span>
                            </div>
                            <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}></h5>
                            <MDBInput wrapperClass='mb-4' label='Nombre de Usuario' id='formControlLg' type='text' size="lg" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <MDBInput wrapperClass='mb-4' label='Contraseña' id='formControlLg' type='password' size="lg" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={handleLogin}>Aceptar</MDBBtn>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </MDBContainer>
    );
};

export default Login;
