import axios from 'axios';
import firebase from 'firebase/app';
require('firebase/auth');

import { dataBaseURL, firebaseAuth, firebaseConfig } from './api-config';

const header = {
  'Content-Type': 'application/json'
};

const initAPI = () => {
  firebase.initializeApp(firebaseConfig);
};

export const postMessege = messeges => {
  const { userId, name, email, date, title, messege } = messeges
  return axios.post(`${dataBaseURL}/messeges.json`, {
    userId,
    name,
    email,
    date,
    title,
    messege
  });
};

export const getMessege = () => {
  return fetch(`${dataBaseURL}/messeges.json`, { header })
    .then(response => response.json())
    .then(result => {
      const transformResponse = Object.keys(result).map(key => ({
        ...result[key],
        id: key
      }))
      return transformResponse
    });
};

export const signIn = (email, password) => {
  return axios.post(firebaseAuth, {
    email,
    password,
    returnSecureToken: true
  })
    .then(response => response);
};

export const signUp = async ( email, password ) => {
  return firebase.auth()
    .createUserWithEmailAndPassword(email, password)
      .then(response => response)
};

initAPI();
