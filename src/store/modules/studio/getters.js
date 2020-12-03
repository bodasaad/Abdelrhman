const articleById = (state) => (id) => {
    return state.articles.find(a => a._id.toString() === id.toString())
};
const projectById = (state) => (id) => {
    return state.projects.find(p => p._id.toString() === id.toString())

};

const filterArticle = (state) => (category) => {
    if (category === 'all') {
        state.filtredArticles = state.articles
        return state.articles
    }
    const articles = state.articles.filter(i => i.category === category)
    state.filtredArticles = articles
    return articles
}

const filterProject = (state) => (category) => {
    
    if (category === 'all') {
        state.filtredProjects = state.projects
        return state.projects
    }
    const projects = state.projects.filter(i => i.category === category)
    state.filtredProjects = projects
    return projects
}

export default {
    articleById,
    projectById,
    filterArticle,
    filterProject
};