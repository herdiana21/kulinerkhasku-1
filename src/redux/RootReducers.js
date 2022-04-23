import * as reducers from './root-redux/reducers';
import keyStore from './keys';

const reducer = {
  [keyStore.PENDING]: reducers.pending,
};
