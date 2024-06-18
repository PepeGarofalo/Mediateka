import { Router } from 'express';
import { createVideo } from "../controllers/media.controllers";
import { getVideos} from "../controllers/media.controllers";
import { putVideo } from '../controllers/media.controllers';
import { deleteVideo } from '../controllers/media.controllers';
import { getVideo } from '../controllers/media.controllers';
import { getVideosByCategory } from '../controllers/media.controllers';
import { getLatestVideos } from '../controllers/media.controllers';
const router = Router()
router.get('/hello', (req,res)=> res.send('hello'))
router.post("/video", createVideo );
router.get("/video", getVideos);
router.put("/video/:id", putVideo);
router.delete("/video/:id", deleteVideo)
router.get("/video/:id", getVideo);
router.get("/video/categoria/:categoria",getVideosByCategory)
router.get("/video/last/latest",getLatestVideos)
export default router