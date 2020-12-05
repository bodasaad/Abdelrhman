
import Studio from '@/api/Studio';
import Auth from '@/api/auth';

const checkAuth = (res, dispatch) => {
  if (res.code == 401) {
    return dispatch('logout', null, { root: true });
  }
}


const getAllArticles = async ({ commit, state, rootState, dispatch }) => {
  const res = await Studio.getAllArticles(rootState.url)
  checkAuth(res, dispatch)
  !res.state && commit('msg', { msg: res.msg, type: 'warning' }, { root: true })
  res.state && commit('updateArticles', res.json)
  state.ready += 1
  return res.state ? true : false
};

const getAllProjects = async ({ commit, state, rootState, dispatch }) => {
  const res = await Studio.getAllProjects(rootState.url)
  checkAuth(res, dispatch)
  !res.state && commit('msg', { msg: res.msg, type: 'warning' }, { root: true })
  res.state && commit('updateProjects', res.json)
  state.ready += 1
  return res.state ? true : false
};

const react = async ({ commit, state, rootState, dispatch }, { id, reaction }) => {
  const res = await Studio.react(id, reaction, rootState.url, state.jwt)
  checkAuth(res, dispatch)
  res.state && commit('updateReaction', { reaction: reaction, id: id, item: 'articles', reactions: res.json.reactions })
  return res.state ? true : res
}
const newview = async ({ rootState }, { id, item }) => {
  const res = await Studio.newview(id, item, rootState.url)
  return res.state ? true : res
}


const signup = async ({ rootState }, { data }) => {
  const res = await Auth.signup(data, rootState.url)
  return res.state ? true : false
}

const login = async ({ commit, rootState}, { data }) => {
  const res = await Auth.login(data, rootState.url)
  res.state && commit('authenticate', res.json)
  return res.state ? true : false
}
export default {
  getAllArticles,
  getAllProjects,
  react,
  signup,
  login,
  newview
};