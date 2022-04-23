import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogicMiddleware} from 'redux-logic';
import {splitUp} from '../utils/arrays';

import rootLogic from './RootLogics';
import rootReducer from './RootReducers';

const INITIAL_STATE = {};

const chunks = splitUp(rootLogic, 40);

const middlewares = chunks?.map(chunk => createLogicMiddleware(chunk));
const middleware = applyMiddleware(...middlewares);

export default () => {
  const store = createStore(
    rootReducer,
    INITIAL_STATE,
    composeWithDevTools(middleware),
  );

  return store;
};
