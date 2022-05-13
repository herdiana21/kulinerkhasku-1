const initialState = {
  registerUserData: {
    status: false,
    message: '',
    data: [],
  },
  dataUser: {status: false, message: '', data: {}},
};
console.log('ini state', initialState.dataUser);
const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'SUCCESS_REGISTER_USER':
      return {
        ...state.registerUserData,
        registerUserData: actions.payload,
      };
    case 'SUCCES_LOGIN':
      return {
        ...state.dataUser,
        dataUser: actions.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
