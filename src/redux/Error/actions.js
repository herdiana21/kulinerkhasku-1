import types from '../types/actions';

export default {
  clear: () => ({type: types.ACTIONS_CLEAR_ERR}),
  addErrorAction: payload => ({type: types.ACTION_ERR, ...payload}),
  retryActions: () => ({type: types.ACTIONS_RETRY}),
};
