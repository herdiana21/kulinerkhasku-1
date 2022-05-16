const initialState = {
  registerUserData: {
    status: false,
    message: '',
    data: [],
  },
  infodataUser: {status: false, message: '', data: {}},
  dataToko: {status: false, message: '', data: []},
};
const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'SUCCESS_REGISTER_USER':
      return {
        ...state,
        registerUserData: actions.payload,
      };
    case 'SUCCES_LOGIN':
      return {
        ...state,
        dataUser: actions.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
