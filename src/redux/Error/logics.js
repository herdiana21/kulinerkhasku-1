import {createLogic} from 'redux-logic';
import selectors from 'redux/Selectors';

import {error as errorAction, types} from '@Redux-root-actions';

const addErrorAction = createLogic({
  type: types.ACTION_ERR,
  cancelType: types.ON_SCREEN_NAVIGATE,
  transform({action}, allow) {
    allow(action);
  },
});

const onError = createLogic({
  type: [/.*_ERROR\b/],
  transform({action}, allow) {
    const {payload = {}} = action;
    const {exception: {message = ''} = {}} = payload;
    allow({...action, exception: message, errMessage: message});
  },
  process({action}, dispatch, done) {
    let {errMessage, payload = {}} = action;
    const {originAction = {type: ''}} = payload;
    console.log('err =>>', {action});
    if (errMessage === 'Aborted') {
      errMessage =
        'Permintaan ke server melebihi batas waktu, harap perikas koneksi anda.';
    }
    if (originAction.type) {
      dispatch(
        errorAction.addErrorAction({
          originAction,
          errMessage,
          errCode: 0,
        }),
      );
    }
    done();
  },
});

const onRetry = createLogic({
  type: types.ACTIONS_RETRY,
  latest: true,
  debounce: 1000,
  transform({getState, action}, allow) {
    const errorActions = selectors.getErrorActions(getState());
    allow({type: action.type, payload: errorActions});
  },
  process({action}, dispatch, done) {
    action.payload.forEach(dispatch);
    done();
  },
});

export default [
  // addErrorActionLogic,
  onError,
  onRetry,
  addErrorAction,
];
