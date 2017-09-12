
import * as ajaxUtil from './AjaxService';
import Cookies from 'universal-cookie';
import UserService from './UserService';
import User from './User';

class AuthService {
    loadingUserPromise = null;
    
    constructor(){
        this.cookieService = new Cookies();
        this.userService = UserService;

        if (this.getToken()) {
            this.loadingUserPromise = this.getUser();

            this.loadingUserPromise.then(user => {
                this.currentUser = user;
                this.loadingUserPromise = null;
            });
        }
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
                    this.currentUser = user;
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
        this.currentUser = new User();
    }

    createUser(user) {
        return new Promise((resolve, reject) => {

            this.userService.create(user).then(response => {
                this.cookieService.set('token', response['token']);

                this.loadingUserPromise = this.getUser();
                this.loadingUserPromise.then(lookedUpUser => {
                    this.currentUser = lookedUpUser;
                    this.loadingUserPromise = null;
                    resolve(lookedUpUser);
                });
            }).catch(err => {
                reject(err);
            });
        });
    }

    isLoggedIn() {
        return this.currentUser && this.currentUser.roles;
    }

    isLoggedInAsync() {
        return new Promise((resolve, reject) => {

            if (this.loadingUserPromise) {
                this.loadingUserPromise.then(() => {
                    resolve(true);
                })
                    .catch(() => {
                        resolve(false);
                    });
            } else if (this.currentUser && this.currentUser.roles) {
                resolve(true);
            } else {
                resolve(false);
            }

        });
    }

    isAdmin() {
        if (!this.currentUser || !this.currentUser.roles) {
            return false;
        }

        const pos = this.currentUser.roles.map(e => {
            return e.role;
        }).indexOf('admin');

        return pos !== -1;
    }

    hasRole(role) {
        if (!this.currentUser || !this.currentUser.roles) {
            return false;
        }

        const pos = this.currentUser.roles.map(function (e) {
            return e.role;
        }).indexOf(role);

        return pos !== -1;
    }

    hasRoles(roles) {
        let hadAny = false;

        if (!this.currentUser || !this.currentUser.roles) {
            return false;
        }

        for (let i = 0; i < roles.length; i++) {

            const pos = this.currentUser.roles.map(function (e) {
                return e.role;
            }).indexOf(roles[i]);

            if (pos !== -1) {
                hadAny = true;
                break;
            }
        }

        return hadAny;
    }

    isMine(userId) {
        if (!this.currentUser || !userId) {
            return false;
        }

        return this.currentUser._id === userId;
    }

    getCurrentUser() {
        return this.currentUser;
    }

    getToken() {
        return this.cookieService.get('token');
    }

    getUser(){
        return this.userService.get();
    }

}

export default new AuthService();