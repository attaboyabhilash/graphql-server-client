export default {
    Query: {
        getAllPosts: async (_, {}, { Post }) => {
            let posts = await Post.find()
            return posts
        },
        getPostById: async (_, { id }, { Post }) => {
            let post = await Post.findById(id)
            return post
        },
    },
    Mutation: {
        createNewPost: async (_, { newpost }, { Post }) => {
            let result = await Post.create(newpost)
            return result
        },
        updatePostById: async (_, { id, updatedPost }, { Post }) => {
            let editedResult = await Post.findByIdAndUpdate(
                id,
                { ...updatedPost },
                { new: true }
            )
            return editedResult
        },
        deletePostById: async (_, { id }, { Post }) => {
            let deletedResult = await Post.findByIdAndDelete(id)
            return {
                id: deletedResult.id,
                message: "Your Post is Deleted Successfully",
                success: true,
            }
        },
    },
}
