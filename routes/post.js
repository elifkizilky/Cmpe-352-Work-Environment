const express = require('express')
//controllerda yaptıklarını import et buraya
const {createPosts, getDetail, getPosts, getUpdate, deletePost, searchPost} = require('../controllers/post.js')
const auth = require('../middleware/auth.js')
const router = express.Router();

//bu url geldiğinde sağdaki parametreyi çağırsın bana
router.get('/getPosts', getPosts)
router.post('/createPost',auth, createPosts)
//idye göre yapcaz bunu
router.get('/getDetail/:id', getDetail)
router.patch('/getUpdate/:id', auth, getUpdate)
router.delete('/deletePost/:id', auth, deletePost)
router.get('/searchPost', searchPost)

//create,update, delete post için login olması gerek
module.exports = router;


