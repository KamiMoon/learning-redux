import { SET_CURRENT_USER, setCurrentUser, userReducer } from './User';

it('should create action SET_CURRENT_USER', () => {
  expect(setCurrentUser()).toEqual({
    type: SET_CURRENT_USER
  });
});

it('should return the initial state', () => {
  expect(userReducer(undefined, {})).toEqual({});
});

it('should should handle SET_CURRENT_USER', () => {
  expect(
    userReducer(
      {},
      {
        type: SET_CURRENT_USER,
        user: { name: 'Eric' }
      }
    )
  ).toEqual({ name: 'Eric' });
});
