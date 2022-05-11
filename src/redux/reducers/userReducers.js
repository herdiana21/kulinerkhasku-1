const initialState = {
  status: false,
  message: '',
  data: [],
};

const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'SUCCESS_REGISTER_USER':
      return {
        ...state,
        status: actions.payload.status,
        message: actions.payload.message,
        data: actions.payload.data,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
