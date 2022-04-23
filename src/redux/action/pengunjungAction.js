import * as tipe from './types';
import axios from 'axios';
import {useDispatch} from 'react-redux';
export const tambahPengunjung = inputan => {
  return {type: tipe.TAMBAH_PENGUNJUNG, inputan: inputan};
};

export const sendRegister = param => useDispatch => {
  return (
    useDispatch({type: tipe.TAMBAH_PENGUNJUNG}) &&
    axios
      .post('api/register_user', param)
      .then(res => res)
      .then(res => {
        if (res.status) {
          console.log(res.message);
        } else {
          console.log('login gagal');
        }
      })
  );
};
