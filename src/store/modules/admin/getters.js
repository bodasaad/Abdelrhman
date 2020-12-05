const projectById = (state) => (id) => {
    return state.allprojects.find(a => a._id.toString() == id.toString())
};
const articleById = (state) => (id) => {
    return state.allarticles.find(a => a._id.toString() == id.toString())
};

export default {
    projectById,
    articleById
};