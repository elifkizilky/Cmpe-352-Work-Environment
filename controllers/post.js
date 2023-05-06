const PostSchema = require('../models/post.js')

const getPosts = async(req, res) => {
    try {
        const getPosts = await PostSchema.find()
        res.status(201).json({
            getPosts
        })

    } catch (error) {
        return res.status(500).json({message: error.message})  
    }
}

const createPosts = async(req, res) => {
    try {
        const newPost = await PostSchema.create(req.body)
        res.status(201).json({
            newPost
        })

    } catch (error) {
        return res.status(500).json({message: error.message})  
    }
}

const getDetail = async(req, res) => {
    try {
        const {id} = req.params; //id dışarıdan gelecek
        const detailPost = await PostSchema.findById(id)
        res.status(201).json({
            detailPost
        })

    } catch (error) {
        return res.status(500).json({message: error.message})  
    }
}

const getUpdate = async(req, res) => {
    try {
        const {id} = req.params; //id dışarıdan gelecek
        const updatePost = await PostSchema.findByIdAndUpdate(id, req.body, {new: true}) //idyi dışarıdan gelen req.body ile güncellicen
        res.status(201).json({ //status dönmesen de olur
            updatePost
        })

    } catch (error) {
        return res.status(500).json({message: error.message})  
    }
}

const deletePost = async(req, res) => {
    try {
        const {id} = req.params;  //id numarasına göre bul
        await PostSchema.findByIdAndRemove(IDBCursor)
        res.status(201).json({
            message: "Silme işleminiz başarılı"
        })

    } catch (error) {
        return res.status(500).json({message: error.message})  
    }
}

//search post içine bir query at, postman içinde de böyle yaz
// /.../searchPost?search="samsung"&tag="deneme" ... birden fazla parametreyle search gibi
const searchPost = async (req, res) => {
    const{search, tag} = req.query; //bunları queryden alıcam bodyden değil

    try {
      const title = new RegExp(search, "i")
      
      const posts  = await PostSchema.find({ $or: [{title}], tag: {$in: tag.split(",")}})

      res.status(200).json({
        posts
      })
    } catch (error) {
        return  res.status(500).json({message: error.message})
        
    }
}

module.exports = {createPosts, getDetail, getPosts, getUpdate, deletePost, searchPost}