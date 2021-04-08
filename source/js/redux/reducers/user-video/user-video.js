import { DATA_REQUESTED, DATA_RECEIVED, DATA_NOT_RECEIVED, DATA_RESET } from '../../actions-name/actions-name';

const defaultState = { requested: false, info: null, err: null };

export default function userVideo(state = defaultState, { type, data, err }) {
  switch (type) {
    case DATA_REQUESTED:
      return { ...state, requested: true, err: null };
    case DATA_RECEIVED:
      return { ...state, requested: false, info: data };
    case DATA_NOT_RECEIVED:
      return { ...state, requested: false, err };
    case DATA_RESET:
      return { ...state, ...defaultState };
    default:
      return state;
  }
}