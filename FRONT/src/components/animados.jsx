// src/components/Animados.js
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './components.css';
import Footers from "../layouts/footer";
import VIDEO_API_ENDPOINTS from '../../src/config/apiConfig';

// Función para obtener el ID del video de YouTube
const getYouTubeVideoId = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
};

const Animados = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchAnimadosVideos = async () => {
            try {
                const response = await axios.get(VIDEO_API_ENDPOINTS.ANIMADOS);
                const modifiedVideos = response.data.map(video => ({
                    ...video,
                    link: `https://www.youtube.com/embed/${getYouTubeVideoId(video.link)}`
                }));
                setVideos(modifiedVideos);
            } catch (error) {
                console.error('Error al obtener los videos de la categoría "animados":', error);
            }
        };

        fetchAnimadosVideos();
    }, []);

    return (
        <>
            <div className="container margintp">
                <div className="row">
                    {videos.map(video => (
                        <div key={video.id} className="col-lg-4 col-sm-12">
                            <div className='hver' style={{ position: 'relative', paddingTop: '56.25%', marginBottom: '10.20%' }}>
                                <iframe
                                    title="YouTube Video"
                                    className='rad'
                                    style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
                                    src={video.link} // Utiliza el link modificado del video como src del iframe
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footers />
        </>
    );
};

export default Animados;
