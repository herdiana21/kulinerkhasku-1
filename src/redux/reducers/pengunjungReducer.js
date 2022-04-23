import axios from 'axios';
import * as tipe from '../action/types';

const initialStatePengunjung = {};

const pengunjungReducer = (state = initialStatePengunjung, action) => {
  switch (action.type) {
    case tipe.TAMBAH_PENGUNJUNG:
      return action.inputan;
    default:
      return state;
  }
};

export default pengunjungReducer;
