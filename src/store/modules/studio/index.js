import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  isAuth: false,
  jwt: localStorage.getItem('ut'),
  user: null,
  fetching: true,
  ready: 0,
  articles: [],
  projects: [],
  filtredArticles: [],
  filtredProjects: []
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};