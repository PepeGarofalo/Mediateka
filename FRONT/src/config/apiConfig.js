// src/config/apiConfig.js
// src/config/videoConfig.js
const VIDEO_API_BASE_URL = ' http://localhost:3000';

const VIDEO_API_ENDPOINTS = {
  ANIMADOS: `${VIDEO_API_BASE_URL}/video/categoria/animados`,
  CAPSULAS: `${VIDEO_API_BASE_URL}/video/categoria/capsulas`,
  EXPERIENCIAS: `${VIDEO_API_BASE_URL}/video/categoria/experiencias`,
  PROGRAMAS: `${VIDEO_API_BASE_URL}/video/categoria/programas`,
  SPOTS: `${VIDEO_API_BASE_URL}/video/categoria/spots`,
  VIDEO: `${VIDEO_API_BASE_URL}/video`,
  // Puedes agregar más endpoints aquí según sea necesario
};

export default VIDEO_API_ENDPOINTS;
