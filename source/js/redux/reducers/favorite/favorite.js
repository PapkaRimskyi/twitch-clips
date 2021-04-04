import { ADD_TO_FAVORITE, DELETE_FROM_FAVORITE } from '../../actions-name/actions-name';

const defaultState = [];

// Копирую favoriteList в localStorage.

function setInLocalStorage(action, list, id) {
  const favoriteList = JSON.parse(localStorage.getItem('favoriteList'));
  if (action === 'add') {
    localStorage.setItem('favoriteList', JSON.stringify(list));
  } if (action === 'remove') {
    localStorage.setItem('favoriteList', JSON.stringify([...favoriteList.filter((video) => video.id !== id)]));
  }
}

//

export default function favorite(state = defaultState, { type, clip, id }) {
  switch (type) {
    case ADD_TO_FAVORITE:
      setInLocalStorage('add', [...state, ...clip]);
      return [...state, ...clip];
    case DELETE_FROM_FAVORITE:
      setInLocalStorage('remove', null, id);
      return [...state.filter((video) => video.id !== id)];
    default:
      return state;
  }
}
