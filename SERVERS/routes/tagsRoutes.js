import express from 'express'
import { getAllTags, createTag, getTagById } from "../controllers/tagsController.js"

const router = express.Router()

router.get('/tags', getAllTags)
router.post('/tags', createTag)
router.get('/tags/:id', getTagById)

export default router