import { signUp } from '../../api/api-handlers';
import { routs } from '../../shared/constants/routes';
import { setEmail } from '../../shared/ls-services/ls-services';

export const signUpHandlers = () => {
  const signUpForm = document.getElementById('sign-up__form');

  signUpForm.addEventListener('submit', event => {
    event.preventDefault();

    const email1 = document.getElementById('email1').value;
    const password1 = document.getElementById('password1').value;

    signUp(email1, password1)
      .then(response => {
        if (response) {
          window.location.href = routs.sign_in;
        }
      })
  })
};
