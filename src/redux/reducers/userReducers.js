const initialState = {
  registerUserData: {
    status: false,
    message: '',
    data: [],
  },
};

const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'SUCCESS_REGISTER_USER':
      return {
        ...state,
        registerUserData: actions.payload.status,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
