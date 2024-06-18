/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './components.css';
import VIDEO_API_ENDPOINTS from '../config/apiConfig';

function Formulary() {
    const [videos, setVideos] = useState([]);
    const [categoria, setCategoria] = useState('');
    const [link, setLink] = useState('');
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(VIDEO_API_ENDPOINTS.VIDEO);
                setVideos(response.data);
            } catch (error) {
                console.error('Error al obtener los videos:', error);
            }
        };

        fetchVideos();
    }, []);

    const handleCategoriaChange = (e) => {
        setCategoria(e.target.value);
    };

    const handleLinkChange = (e) => {
        setLink(e.target.value);
    };

    const handleAceptarClick = async () => {
        try {
            if (selectedVideo) {
                // Modificar el video seleccionado
                await axios.put(`${VIDEO_API_ENDPOINTS.VIDEO}${selectedVideo.id}`, {
                    categoria: categoria,
                    link: link
                });
            } else {
                // Insertar un nuevo video
                await axios.post( VIDEO_API_ENDPOINTS.VIDEO, {
                    categoria: categoria,
                    link: link
                });
            }
            setCategoria('');
            setLink('');
            actualizarTabla(); // Llamada a la función actualizarTabla después de la inserción/modificación exitosa
            setSelectedVideo(null); // Limpiar el video seleccionado después de la operación
            console.log('Operación exitosa.');
        } catch (error) {
            console.error('Error al realizar la operación:', error);
        }
    };

    const eliminarVideo = async (id) => {
        try {
            await axios.delete(`${VIDEO_API_ENDPOINTS.VIDEO}/${id}`);
            setVideos(videos.filter(video => video.id !== id));
            console.log('Video eliminado:', id);
        } catch (error) {
            console.error('Error al eliminar el video:', error);
        }
    };

    const actualizarTabla = async () => {
        try {
            const response = await axios.get(VIDEO_API_ENDPOINTS.VIDEO);
            setVideos(response.data);
        } catch (error) {
            console.error('Error al actualizar la tabla:', error);
        }
    };

    const handleModificarClick = (video) => {
        // Establecer los datos del video seleccionado en los campos del formulario
        setCategoria(video.categoria);
        setLink(video.link);
        setSelectedVideo(video);
    };

    return (
        <div className="container margmtop">
            <div className="row">
                <div className="col-6 shadow">
                    <h1>Tabla de Contenidos</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Acciones</th>
                                <th>Categoría</th>
                                <th>Enlace</th>
                            </tr>
                        </thead>
                        <tbody>
                            {videos.map(video => (
                                <tr key={video.id}>
                                    <td>
                                        <button onClick={() => eliminarVideo(video.id)} className="btn btn-danger btn-block">Eliminar</button>
                                        <button onClick={() => handleModificarClick(video)} className="btn btn-primary btn-block">Modificar</button>
                                    </td>
                                    <td>{video.categoria}</td>
                                    <td>{video.link}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                <div className="col-6 shadow" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h1 style={{ marginBottom: '10px' }}>{selectedVideo ? 'Modificar video' : 'Insertar nuevo video'}</h1>
                    <div style={{ marginBottom: '10px' }}>
                        Seleccione la Categoría del Audiovisual
                        <div>
                            <select className='inpt' value={categoria} onChange={handleCategoriaChange}>
                                <option value="">Seleccionar...</option>
                                <option value="animados">Animados</option>
                                <option value="capsulas">Cápsulas</option>
                                <option value="experiencias">Experiencias</option>
                                <option value="programas">Programas</option>
                                <option value="spots">Spots</option>
                            </select>
                        </div>

                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        Copie el link del Audiovisual aquí
                        <div>
                            {selectedVideo ? 'modificar' : ''}
                            <input className='inpt' type="text" placeholder="Copiar Link Aquí" value={link} onChange={handleLinkChange} style={{ marginBottom: '10px' }} />
                        </div>

                    </div>
                    <Button variant="primary" style={{ marginBottom: '10px' }} onClick={handleAceptarClick}>
                        {selectedVideo ? 'Modificar' : 'Aceptar'}
                    </Button>{' '}
                    {selectedVideo && (
                        <Button variant="secondary" style={{ marginBottom: '10px' }} onClick={() => setSelectedVideo(null)}>
                            Cancelar
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Formulary;
