import { ADD_TO_FAVORITE, DELETE_FROM_FAVORITE } from '../../actions-name/actions-name';

export function addToFavorite(clip) {
  return {
    type: ADD_TO_FAVORITE,
    clip,
  };
}

export function removeFromFavorite(id) {
  return {
    type: DELETE_FROM_FAVORITE,
    id,
  };
}
