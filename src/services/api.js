import axios from "axios";

const URL = "http://localhost:5000";

/* Requições Post */

function signUp(body) {
  return axios.post(`${URL}/sign-up`, body);
}

function signIn(body) {
  return axios.post(`${URL}/sign-in`, body);
}

function deleteSession(token) {
  return axios.delete(`${URL}/sign-out`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

function getTransactions(token) {
  return axios.get(`${URL}/transactions`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export { signUp, signIn, deleteSession, getTransactions };
