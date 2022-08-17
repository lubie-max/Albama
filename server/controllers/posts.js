import PostModel from "../models/postModel.js"


export const getPosts = async (req, res) => {
    try {
        const postModel = await PostModel.find();
        // res.send('Here Me')
        res.status(200).json(postModel)
    }

    catch (error) {
        res.status(404).json({message : error.message})
    }
}

export const createPost = async (req, res) => {
     const post = req.body ;
     const newPost = new PostModel(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)

       
    }
    catch(error){
        res.status(409).json({message :message.error})
     }
    }
