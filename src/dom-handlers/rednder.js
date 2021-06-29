import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

import { getMessege, postMessege } from '../api/api-handlers';
import { getEmail } from '../shared/ls-services/ls-services';

export const rerenderMainPage = () => {
  getMessege()
    .then(messeges => {
      const messegeContainer = document.querySelector('.view_messege_wrapper');
      messegeContainer.innerHTML = null;

      messeges.forEach(el => {

        const messegeWrapper = document.createElement('div');
        const title = document.createElement('h6');
        const userMesseges = document.createElement('div');
        const userInfo = document.createElement('div');
        const messegeDate = document.createElement('span');
        const nameUser = document.createElement('span');

        messegeWrapper.className = 'messegeWrapper';
        title.className = 'messegeWrapper__title';
        userMesseges.className = 'messegeWrapper__messeges';
        userInfo.className = 'profile';
        nameUser.className = 'name';
        messegeDate.className = 'date';

        title.innerHTML = el.title;
        userMesseges.innerHTML = el.messege;
        messegeDate.innerHTML = moment(el.date).calendar();
        nameUser.innerHTML = el.name;

        messegeWrapper.append(title, userMesseges);
        userMesseges.append(userInfo);
        userInfo.append(nameUser, messegeDate);
        messegeContainer.append(messegeWrapper);
      })
    })
};

export const messegeFormHandler = () => {

  const form_messege = document.getElementById('post_form');
  const title_inp = document.getElementById('title_post');
  const messege_inp = document.getElementById('messege');

  const userMessege = {
    userId: uuidv4(),
    name: "Vitaliy",
    email: "test@mail.com",
    date: moment().format(),
    title: null,
    messege: null,
  };

  form_messege.addEventListener('submit', event => {
    event.preventDefault();

    userMessege.title = title_inp.value;
    userMessege.messege = messege_inp.value;

    postMessege(userMessege)
      .then(() => {
        title_inp.value = null;
        messege_inp.value = null;
      })
      .then(() => rerenderMainPage())
  })
};


export const renderUserEmail = () => {
  const renderTag = document.getElementById('userEmail');
  const userEmail = getEmail();

  renderTag.innerHTML = userEmail
};
