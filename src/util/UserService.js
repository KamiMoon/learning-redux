import * as ajaxUtil from './AjaxService';

class UserService{
    
        constructor() {
            this.url = '/api/users';
        }
    
        get(){
            return ajaxUtil.get(`${this.url}/me`);
        }
    
        profile(id){
            return ajaxUtil.get(`${this.url}/profile/${id}`);
        }
    
        update(user) {
            return ajaxUtil.put(`${this.url}/${user._id}`, user);
        }
    
        create(user) {
            return ajaxUtil.post(this.url, user);
        }
    
        delete(id) {
            return ajaxUtil.doDelete(`${this.url}/${id}`);
        }
    
        changePassword(id, oldPassword, newPassword) {
            return ajaxUtil.put(`${this.url}/${id}/password`, { oldPassword: oldPassword, newPassword: newPassword });
        }

}

export default new UserService();