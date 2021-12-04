
const {
    signup,
    getUser,
    updateUser,
    deleteUser,
} = require ('./User.controller');

const {
    createPost,
    getPosts
} = require('./Post.controller')


module.exports = {
    signup,
    getUser,
    updateUser,
    deleteUser,
    createPost,
    getPosts
}