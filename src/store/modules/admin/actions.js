
import Admin from '@/api/Admin';

const checkAuth = (res, commit) => {
  if (res.code == 401) {
    return commit('logout');
  }
}


const login = async ({ commit, rootState }, { data }) => {
  const res = await Admin.login(data, rootState.url)
  !res.state && commit('msg', { msg: res.msg, type: 'warning' }, { root: true })
  res.state && commit('authenticate', res.json)
  return res.state ? true : false
};
const getArticles = async ({ commit, rootState, state }) => {
  state.fetching = true
  const res = await Admin.getArticles(state.jwt, rootState.url)
  checkAuth(res, commit)
  commit('msg', { msg: res.msg, type: res.state ? 'success' : 'warning' })
  res.state && commit('updatearticles', res.json.articles)
  state.fetching = false

  return res.state ? true : false
};
const addArticle = async ({ commit, rootState, state }, { data }) => {
  const res = await Admin.addArticle(data, state.jwt, rootState.url)
  checkAuth(res, commit)
  commit('msg', { msg: res.msg, type: res.state ? 'success' : 'warning' }, { root: true })
  return res.state ? true : false
};
const editArticle = async ({ commit, rootState, state }, { data, id }) => {
  const res = await Admin.editArticle(data, id, state.jwt, rootState.url)
  checkAuth(res, commit)
  commit('msg', { msg: res.msg, type: res.state ? 'success' : 'warning' }, { root: true })
  return res.state ? true : false
};
const deleteArticle = async ({ commit, state, rootState }, { data }) => {
  const res = await Admin.deleteArticle(data.id, state.jwt, rootState.url)
  checkAuth(res, commit)
  commit('msg', { msg: res.msg, type: res.state ? 'success' : 'warning' }, { root: true })
  res.state && commit('deletearticle', data.id)
  return res.state ? true : false
};




const getProjects = async ({ commit, rootState, state }) => {
  const res = await Admin.getProjects(state.jwt, rootState.url)
  checkAuth(res, commit)
  commit('msg', { msg: res.msg, type: res.state ? 'success' : 'warning' })
  res.state && commit('updateprojects', res.json.projects)
  return res.state ? true : false
};
const addProject = async ({ commit, rootState, state }, { data }) => {
  const res = await Admin.addProject(data, state.jwt, rootState.url)
  checkAuth(res, commit)
  commit('msg', { msg: res.msg, type: res.state ? 'success' : 'warning' })
  return res.state ? true : false
};
const editProject = async ({ commit, rootState, state }, { data, id }) => {
  const res = await Admin.editProject(data, id, state.jwt, rootState.url)
  checkAuth(res, commit)
  commit('msg', { msg: 'Updated', type: res.state ? 'success' : 'warning' }, { root: true })
  return res.state ? true : false
};
const deleteProject = async ({ commit, state, rootState }, { data }) => {
  const res = await Admin.deleteProject(data.id, state.jwt, rootState.url)
  checkAuth(res, commit)
  commit('msg', { msg: res.msg, type: res.state ? 'success' : 'warning' }, { root: true })
  res.state && commit('deleteproject', data.id)
  return res.state ? true : false
};





const getCategories = async ({ commit, rootState }) => {
  const res = await Admin.getCategories(rootState.url)
  checkAuth(res, commit)
  commit('msg', { msg: res.msg, type: res.state ? 'success' : 'warning' }, { root: true })
  res.state && commit('updatecategories', res.json.categories)
  return res.state ? true : false
};
const addCategory = async ({ commit, rootState, state }, { data }) => {
  const res = await Admin.addCategory(data, state.jwt, rootState.url)
  checkAuth(res, commit)
  commit('msg', { msg: res.msg, type: res.state ? 'success' : 'warning' })
  return res.state ? true : false
};
const editCategory = async ({ commit, rootState, state }, { data, id }) => {
  const res = await Admin.editCategory(data, id, state.jwt, rootState.url)
  checkAuth(res, commit)
  commit('msg', { msg: res.msg, type: res.state ? 'success' : 'warning' })
  return res.state ? true : false
};
const deleteCategory = async ({ commit, state, rootState }, { data }) => {
  const res = await Admin.deleteCategory(data.id, state.jwt, rootState.url)
  checkAuth(res, commit)
  commit('msg', { msg: res.msg, type: res.state ? 'success' : 'warning' }, { root: true })
  res.state && commit('deletecategory', data.id)
  return res.state ? true : false
};














export default {
  login,
  getArticles,
  addArticle,
  editArticle,
  deleteArticle,

  getProjects,
  addProject,
  editProject,
  deleteProject,

  getCategories,
  addCategory,
  editCategory,
  deleteCategory

};