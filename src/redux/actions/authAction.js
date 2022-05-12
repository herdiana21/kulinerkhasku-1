import axios from 'axios';

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
      console.log(error);
    })
    .then(result => {
      console.log('masuk');
    });
};
