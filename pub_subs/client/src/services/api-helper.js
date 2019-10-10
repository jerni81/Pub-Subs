const axios = require('axios')
const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export const loginUser = async  (loginData) => {
  const resp = await api.post('/auth/login', loginData);
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const registerUser = async  (registerData) => {
  const resp = await api.post('/users', {user: registerData});
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if(token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

export const showMenu = async () => {
  try {
    const sandwiches = await api.get(`/sandwiches`);
    return sandwiches.data;
  } catch (e) {
    console.log(e.message);
  }
}

export const showIngred = async () => {
  try {
    const ingredients = await api.get(`/ingredients`);
    return ingredients.data;
  } catch (e) {
    console.log(e.message);
  }
}

export const newSand = async (sandData) => {
  try {
    const newSandwich = await api.post('/sandwiches', sandData);
    return newSandwich.data;
  } catch (e) {
    console.log(e.message);
  }
}

export const deleteSand = async (id) => {
  try {
    const deleted = await api.delete(`/sandwiches/${id}`);
    return deleted.data;
  } catch (e) {
    console.log(e.message);
  }
}

export const editSand = async (id, sandData) => {
  try {
    const edited = await api.put(`/sandwiches/${id}`, sandData);
    return edited.data;
  } catch (e) {
    console.log(e.message);
  }
}
