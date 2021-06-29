import { routs } from '../../shared/constants/routes';
import { removeEmail, removeToken } from '../../shared/ls-services/ls-services';

export const logout = () => {
  const logoutBtn = document.getElementById('logout');

  logoutBtn.addEventListener('click', removeEmailToken)
};

const removeEmailToken = () => {
  removeEmail();
  removeToken();
  window.location.href = routs.sign_in
};
