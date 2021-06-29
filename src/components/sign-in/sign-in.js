import { signIn } from '../../api/api-handlers';
import { routs } from '../../shared/constants/routes';
import { setEmail, setToken } from '../../shared/ls-services/ls-services.js';

export const signInHandlers = () => {
  const signInForm = document.querySelector('.sign-in__form');

  signInForm.addEventListener('submit', event => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signIn(email, password)
      .then(response => {
        if (response) {
          const { idToken: token } = response.data;
          setToken(token);
          const { email } = response.data
          setEmail(email)
          window.location.href = routs.home
        }    
      })
  })
};
