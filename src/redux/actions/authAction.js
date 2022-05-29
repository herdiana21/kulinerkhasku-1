import axios from 'axios';
import {dispatch} from 'rxjs/internal/observable/pairs';

export const signUpUser = param => dispatch => {
  axios
    .post(
      'https://kulinerkhasku21.000webhostapp.com/public/api/register_user',
      {
        name: param.name,
        email: param.email,
        phone: param.phone,
        password: param.password,
      },
    )
    .then(result => {
      console.log(result.data);
      dispatch({type: 'SUCCESS_REGISTER_USER', payload: result.data});
    })
    .catch(error => {
      console.log('Error');
      console.log(error);
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

export const signupToko = param => dispatch => {
  axios
    .post(
      'https://kulinerkhasku21.000webhostapp.com/public/api/register_store_owner',
      param,
    )
    .then(result => {
      dispatch({type: 'SUCCESS_REGISTER_TOKO', payload: result.data});
    })
    .catch(error => {
      console.log(error);
    });
};
