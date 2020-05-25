import * as R from 'ramda';

const getResponse = R.prop('response');
export const getData = R.prop('data');
export const getStatus = R.compose(R.prop('status'), getResponse);
export const getStatusText = R.compose(R.prop('statusText'), getResponse);
export const getDataResponse = R.compose(R.prop('data'), getResponse);
export const getMessage = R.compose(R.path(['data', 'message']), getResponse);

export const getError = R.applySpec({
  status: getStatus,
  statusText: getStatusText,
  data: getDataResponse,
  message: getMessage,
});
