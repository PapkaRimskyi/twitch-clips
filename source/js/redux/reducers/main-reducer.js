import { combineReducers } from 'redux';

import userVideo from './user-video/user-video';
import favorite from './favorite/favorite';

export default combineReducers(
  {
    videoList: userVideo,
    favoriteList: favorite,
  },
);
