export const initialState = {
  name: '',
  email: '',
  token: '',
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'setEmail':
      return {...state, email: action.payload.email};
    default:
      return state;
  }
};
