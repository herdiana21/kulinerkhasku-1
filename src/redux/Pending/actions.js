import types from '../types/actions';

export default {
  addPendingActions: actions => ({type: types.ACTION_PENDING, actions}),
  resumeActions: () => ({type: types.ACTIONS_RESUME}),
};
