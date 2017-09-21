const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
});

export function userReducer(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...action.user
      };
    default:
      return state;
  }
}

export class User {
  _id;
  stripeCustomerId;
  roles = [];
  name;
  email;
  phone;
  address;
  city;
  state;
  zip;
  activated;
  photo;
}
