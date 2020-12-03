const authenticate = (state, authData) => {

  state.jwt = authData.token
  state.user = authData.name
  state.isAuth = true
  const remainingMilliseconds = 60 * 60 * 1000;
  state.sessionExpiryDate = new Date(
    new Date().getTime() + remainingMilliseconds
  );

  localStorage.setItem('at', state.jwt)
  localStorage.setItem('aed', state.sessionExpiryDate)
  localStorage.setItem('user', state.user)
}


const checkauthintecated = (state) => {
  const expiryDate = localStorage.getItem("aed");
  const jwtToken = localStorage.getItem("at");
  const oneday = 60 * 60 * 24 * 1000
  if (new Date(expiryDate) <= oneday || !jwtToken) {
    state.isAuth = false;
  } else {
    state.jwt = jwtToken
    state.sessionExpiryDate = expiryDate
    state.isAuth = true
  }
}

// const addnew = (state, expenses) => { state.allExpenses.push(expenses) }
const updatecategories = (state, categories) => { state.allcategories = categories; };

const updatearticles = (state, articles) => { state.allarticles = articles; };

const updateprojects = (state, projects) => { state.allprojects = projects; };

const deleteproject = (state, id) => { state.allprojects = state.allprojects.filter(i => i._id.toString() != id.toString()) };

const deletearticle = (state, id) => { state.allarticles = state.allarticles.filter(i => i._id.toString() != id.toString()) };

const logout = (state) => {

  localStorage.removeItem('at')
  localStorage.removeItem('sessionExpiryDate')
  // state.user = null
  state.jwt = null
  // state.expiryDate = null
  state.isAuth = false

}
const msg = (state, msg) => {
  state.msg = msg
  setTimeout(function () { state.msg = null }, 6000);

}

export default {
  authenticate, checkauthintecated, updatearticles, deletearticle, logout, msg, updateprojects, deleteproject, updatecategories
};