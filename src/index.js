import { logout } from './components/logout/logout';
import { signInHandlers } from './components/sign-in/sign-in';
import { signUpHandlers } from './components/sign-up/sign-up';
import { messegeFormHandler, renderUserEmail, rerenderMainPage } from './dom-handlers/rednder';
import { paths, routs } from './shared/constants/routes';
import { getToken } from './shared/ls-services/ls-services';
import './style/style.scss';

window.onload = () => {

  const nameOfPath = Object.values(paths).find(path => path === window.location.pathname);

  switch (nameOfPath) {
    case paths.home:
      const idToken = getToken();

      if (!idToken) {
        window.location.href = routs.sign_in
      } else {
        messegeFormHandler();
        renderUserEmail();
        rerenderMainPage();
        logout();
      }
      break;
    case paths.sign_in:
      signInHandlers();
      break;
    case paths.sign_up:
      signUpHandlers()
      break;
    default:
      break;
  }
};
