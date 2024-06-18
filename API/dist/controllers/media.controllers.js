"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLatestVideos = exports.getVideosByCategory = exports.getVideo = exports.deleteVideo = exports.putVideo = exports.getVideos = exports.createVideo = void 0;
const media_1 = require("../entitie/media");
const createVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const { link, categoria } = req.body;
        const media = new media_1.Medias();
        media.link = link;
        media.categoria = categoria;
        yield media.save();
        return res.json(media);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.createVideo = createVideo;
const getVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const medias = yield media_1.Medias.find();
        return res.json(medias);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getVideos = getVideos;
const putVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const media = yield media_1.Medias.findOneBy({ id: parseInt(req.params.id) });
        if (!media)
            return res.status(404).json({ message: 'No existe este video' });
        yield media_1.Medias.update({ id: parseInt(id) }, req.body);
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.putVideo = putVideo;
const deleteVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield media_1.Medias.delete({ id: parseInt(id) });
        if (result.affected === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.deleteVideo = deleteVideo;
const getVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield media_1.Medias.findOneBy({ id: parseInt(id) });
        return res.json(result);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getVideo = getVideo;
const getVideosByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { categoria } = req.params; // Obtén la categoría de los parámetros de la URL
        const medias = yield media_1.Medias.find({ where: { categoria } });
        return res.json(medias);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getVideosByCategory = getVideosByCategory;
const getLatestVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const medias = yield media_1.Medias.find({
            order: { id: "DESC" },
            take: 4
        });
        return res.json(medias);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getLatestVideos = getLatestVideos;
