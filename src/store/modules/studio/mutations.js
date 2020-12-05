const authenticate = (state, authData) => {
  state.jwt = authData.token
  state.user = authData.user.name
  state.isAuth = true
  const remainingMilliseconds = 60 * 60 * 1000;
  state.sessionExpiryDate = new Date(
    new Date().getTime() + remainingMilliseconds
  );

  localStorage.setItem('ut', state.jwt)
  localStorage.setItem('uexpiryd', state.sessionExpiryDate)
  localStorage.setItem('u', state.user)
}
const checkauthintecated = (state) => {
  const expiryDate = localStorage.getItem("uexpiryd");
  const jwtToken = localStorage.getItem("ut");
  const oneday = 60 * 60 * 24 * 1000
  if (new Date(expiryDate) <= oneday || !jwtToken) {
    state.isAuth = false;
  } else {
    state.jwt = jwtToken
    state.sessionExpiryDate = expiryDate
    state.isAuth = true
  }
}


const logout = (state) => {

  localStorage.removeItem('jwt')
  localStorage.removeItem('sessionExpiryDate')
  // state.user = null
  state.jwt = null
  // state.expiryDate = null
  state.isAuth = false

}
const addnew = (state, expenses) => {
  state.allExpenses.push(expenses)
}
const updateArticles = (state, articles) => {
  state.articles = articles;
};

const deleteone = (state, id) => {
  state.allExpenses = state.allExpenses.filter(i => i._id.toString() != id.toString())
};

const updateProjects = (state, projects) => {
  state.projects = projects;
};
const updateReaction = (state, data) => {
  const exitem = state[data.item].find(i => i._id.toString() === data.id.toString())
  exitem.reactions = data.reactions
};

export default {
  addnew, updateArticles, deleteone, updateProjects, updateReaction, authenticate, checkauthintecated, logout
};