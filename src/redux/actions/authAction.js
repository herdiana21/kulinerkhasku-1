import axios from 'axios';

export const signUpUser = param => dispatch => {
  axios
    .post(
      'https://kulinerkhasku21.000webhostapp.com/public/api/register_user',
      param,
    )
    .then(result => {
      console.log(result.data);
      dispatch({type: 'SUCCESS_REGISTER_USER', payload: result.data});
    })
    .catch(error => {
      console.log(error);
    })
    .then(result => {
      console.log('masuk');
    });
};

export const loginUser = param => dispatch => {
  axios
    .post(
      'https://kulinerkhasku21.000webhostapp.com/public/api/user/login',
      param,
    )
    .then(result => {
      console.log('Result:', result.data);
      dispatch({type: 'SUCCES_LOGIN', payload: result.data});
    })
    .catch(error => {
      console.log(error);
    });
};

export const doLogoutUser = param => {
  axios
    .post(
      'https://kulinerkhasku21.000webhostapp.com/public/api/user/logout',
      param,
    )
    .then(result => {
      console.log('');
    })
    .catch(error => {
      console.log('');
    });
};
