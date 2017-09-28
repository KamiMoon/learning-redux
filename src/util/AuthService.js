import * as ajaxUtil from './AjaxService';
import Cookies from 'universal-cookie';
import UserService from './UserService';
import { User, setCurrentUser } from './User';

import store from '../redux/storeInstance';

class AuthService {
  loadingUserPromise = null;

  constructor() {
    this.cookieService = new Cookies();
    this.userService = UserService;

    if (this.getToken()) {
      this.loadingUserPromise = this.getUser();

      this.loadingUserPromise.then(user => {
        this.setUser(user);
        this.loadingUserPromise = null;
      });
    }
  }

  setUser(user) {
    store.dispatch(setCurrentUser(user));
  }

  login(email, password) {
    return new Promise((resolve, reject) => {
      const request = ajaxUtil.post('/auth/local', {
        email: email,
        password: password
      });

      request.then(response => {
        this.cookieService.set('token', response['token']);

        this.loadingUserPromise = this.getUser();
        this.loadingUserPromise.then(user => {
          this.setUser(user);
          this.loadingUserPromise = null;
          resolve();
        });
      });

      request.catch(err => {
        this.logout();
        reject(err);
      });
    });
  }

  logout() {
    this.cookieService.remove('token');
    this.setUser({});
  }

  createUser(user) {
    return new Promise((resolve, reject) => {
      this.userService
        .create(user)
        .then(response => {
          this.cookieService.set('token', response['token']);

          this.loadingUserPromise = this.getUser();
          this.loadingUserPromise.then(lookedUpUser => {
            this.setUser(lookedUpUser);

            this.loadingUserPromise = null;
            resolve(lookedUpUser);
          });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  isLoggedIn() {
    const currentUser = this.getCurrentUser();
    return currentUser && currentUser.roles;
  }

  isLoggedInAsync() {
    return new Promise((resolve, reject) => {
      const currentUser = this.getCurrentUser();

      if (this.loadingUserPromise) {
        this.loadingUserPromise
          .then(() => {
            resolve(true);
          })
          .catch(() => {
            resolve(false);
          });
      } else if (this.isLoggedIn()) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }

  isAdmin() {
    const currentUser = this.getCurrentUser();
    if (!currentUser || !currentUser.roles) {
      return false;
    }

    const pos = currentUser.roles
      .map(e => {
        return e.role;
      })
      .indexOf('admin');

    return pos !== -1;
  }

  hasRole(role) {
    const currentUser = this.getCurrentUser();
    if (!currentUser || !currentUser.roles) {
      return false;
    }

    const pos = currentUser.roles
      .map(function(e) {
        return e.role;
      })
      .indexOf(role);

    return pos !== -1;
  }

  hasRoles(roles) {
    let hadAny = false;
    const currentUser = this.getCurrentUser();

    if (!currentUser || !currentUser.roles) {
      return false;
    }

    for (let i = 0; i < roles.length; i++) {
      const pos = currentUser.roles
        .map(function(e) {
          return e.role;
        })
        .indexOf(roles[i]);

      if (pos !== -1) {
        hadAny = true;
        break;
      }
    }

    return hadAny;
  }

  isMine(userId) {
    const currentUser = this.getCurrentUser();
    if (!currentUser || !userId) {
      return false;
    }

    return currentUser._id === userId;
  }

  getCurrentUser() {
    return store.getState().user;
  }

  getToken() {
    return this.cookieService.get('token');
  }

  getUser() {
    return this.userService.get();
  }
}

export default new AuthService();
