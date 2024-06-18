import { Request, Response } from "express"
import { Medias } from "../entitie/media";
export const createVideo = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const { link, categoria } = req.body
        const media = new Medias()
        media.link = link
        media.categoria = categoria
        await media.save()
        return res.json(media)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message })
        }
    }
}
export const getVideos = async (req: Request, res: Response) => {
    try {
        const medias = await Medias.find()
        return res.json(medias)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message })
        }
    }

}
export const putVideo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const media = await Medias.findOneBy({ id: parseInt(req.params.id) })
    if (!media) return res.status(404).json({ message: 'No existe este video' })
    await Medias.update({ id: parseInt(id) }, req.body)
    return res.sendStatus(204)
  } catch (error) {
    if (error instanceof Error) {
        return res.status(500).json({ message: error.message })
    }
}
}
export const deleteVideo = async (req:Request, res:Response) =>{
    try {
        const {id}=req.params
        const result = await Medias.delete({id: parseInt(id)})
    if(result.affected===0){
        return res.status(404).json({message:'Usuario no encontrado'})
    }
        return res.sendStatus(204)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message })
        }
    }

}
export const getVideo = async (req:Request, res:Response) =>{
try {
const {id}=req.params
 const result = await Medias.findOneBy({id: parseInt(id)})
return res.json(result)
} catch (error) {
    if (error instanceof Error) {
        return res.status(500).json({ message: error.message })
    } 
}

}
export const getVideosByCategory = async (req: Request, res: Response) => {
    try {
        const { categoria } = req.params; // Obtén la categoría de los parámetros de la URL
        const medias = await Medias.find({ where: { categoria } });
        return res.json(medias);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}
export const getLatestVideos = async (req: Request, res: Response) => {
    try {
        const medias = await Medias.find({
            order: { id: "DESC" },
            take: 4
        });
        return res.json(medias);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};