import Tag from '../models/Tag.js'

export const getAllTags = async (req, res) => {
    try {
        const tags = await Tag.find()
        res.status(200).json(tags)
    } catch (error) {
        console.error('Error fetching all tags:', error)
        res.status(500).send('Internal Server Error')
    }
}

export const createTag = async (req, res) => {
    try {
        const newTag = new Tag(req.body)
        const savedTag = await newTag.save()
        res.status(201).json(savedTag)
    } catch (error) {
        console.error('Error creating tag:', error)
        res.status(400).send('Bad Request')
    }
}

export const getTagById = async (req, res) => {
    try {
        const tag = await Tag.findById(req.params.id)
        res.status(200).json(tag)
    } catch (error) {
        console.error('Error fetching tag by id:', error)
        res.status(500).send('Internal Server Error')
    }
}


