import { DATA_RECEIVED, DATA_REQUESTED, DATA_NOT_RECEIVED, DATA_RESET } from '../../actions-name/actions-name';

export function dataRequestSended() {
  return {
    type: DATA_REQUESTED,
  };
}

export function dataReceived(data) {
  return {
    type: DATA_RECEIVED,
    data,
  };
}

export function dataNotReceived(err) {
  return {
    type: DATA_NOT_RECEIVED,
    err,
  };
}

export function dataReset() {
  return {
    type: DATA_RESET,
  };
}
