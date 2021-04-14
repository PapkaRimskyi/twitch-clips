import { sendVideoRequest, sendExtraVideoRequest, videoReceived, extraVideoReceived, dataNotReceived } from '../user-video/user-video';

import { authorizObj, mainApiPath } from '../../../variables';

// Оптимизирую объекты с данными о трансляции, выкидывая всё лишнее

function optimizeData(data) {
  if (!data.data.length) {
    return data;
  }
  const collection = data;
  return { ...data, data: collection.data.map((obj) => ({ id: obj.id, user_id: obj.user_id, thumbnail_url: obj.thumbnail_url, title: obj.title, url: obj.url })) };
}

//

// Запрос thunk'ой данных с сервера при первичном рендере списка.

export function requestVideo(channelName, signal) {
  return async (dispatch) => {
    try {
      dispatch(sendVideoRequest());
      if (!channelName) {
        throw new Error(400);
      }
      const loginData = await fetch(`${mainApiPath}users?login=${channelName}`, { ...authorizObj, signal });
      const parsedUserData = await loginData.json();
      if (!parsedUserData.data.length) {
        throw new Error(404);
      }
      const userID = parsedUserData.data[0].id;
      const videoData = await fetch(`${mainApiPath}videos?user_id=${parsedUserData.data[0].id}`, authorizObj);
      const parsedVideoData = await videoData.json();
      await dispatch(videoReceived({ ...optimizeData(parsedVideoData), userID }));
    } catch (err) {
      dispatch(dataNotReceived(err.message));
    }
  };
}

//

// Загрузить ещё видео

export function requestMoreVideo(userID, signal, cursor) {
  return async (dispatch) => {
    try {
      dispatch(sendExtraVideoRequest());
      const videoData = await fetch(`${mainApiPath}videos?user_id=${userID}&after=${cursor}`, { ...authorizObj, signal });
      const parsedVideoData = await videoData.json();
      dispatch(extraVideoReceived(optimizeData(parsedVideoData)));
    } catch (err) {
      dispatch(dataNotReceived(err.message));
    }
  };
}

//
