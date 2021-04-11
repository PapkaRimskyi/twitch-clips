import { VIDEO_REQUEST, EXTRA_VIDEO_REQUEST, VIDEO_RECEIVED, EXTRA_VIDEO_RECEIVED, VIDEO_NOT_RECEIVED, DATA_RESET } from '../../actions-name/actions-name';

export function sendVideoRequest() {
  return {
    type: VIDEO_REQUEST,
  };
}

export function sendExtraVideoRequest() {
  return {
    type: EXTRA_VIDEO_REQUEST,
  };
}

export function videoReceived(data) {
  return {
    type: VIDEO_RECEIVED,
    data,
  };
}

export function extraVideoReceived(data) {
  return {
    type: EXTRA_VIDEO_RECEIVED,
    data,
  };
}

export function dataNotReceived(err) {
  return {
    type: VIDEO_NOT_RECEIVED,
    err,
  };
}

export function dataReset() {
  return {
    type: DATA_RESET,
  };
}
