import express from 'express'
import {
    getAllComments,
    createComment,
    getCommentById,
} from '../controllers/commentsController.js'

const router = express.Router()

router.get('/comments', getAllComments)
router.post('/comments', createComment)
router.get('/comments/:id', getCommentById)

export default router
