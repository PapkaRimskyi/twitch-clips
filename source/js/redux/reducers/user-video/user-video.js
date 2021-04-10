import { VIDEO_REQUEST, EXTRA_VIDEO_REQUEST, VIDEO_RECEIVED, EXTRA_VIDEO_RECEIVED, VIDEO_NOT_RECEIVED, DATA_RESET } from '../../actions-name/actions-name';

const defaultState = { requested: false, requestedMoreData: false, info: null, err: null };

export default function userVideo(state = defaultState, { type, data, err }) {
  switch (type) {
    case VIDEO_REQUEST:
      return { ...state, requested: true };
    case EXTRA_VIDEO_REQUEST:
      return { ...state, requestedMoreData: true };
    case VIDEO_RECEIVED:
      return { ...state, requested: false, info: data };
    case EXTRA_VIDEO_RECEIVED:
      return { ...state, requestedMoreData: false, info: { ...state.info, data: [...state.info.data, ...data.data], pagination: data.pagination } };
    case VIDEO_NOT_RECEIVED:
      return { ...state, requested: false, requestedMoreData: false, err };
    case DATA_RESET:
      return { ...defaultState };
    default:
      return state;
  }
}
