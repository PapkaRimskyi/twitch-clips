import { dataRequestSended, dataReceived, dataNotReceived } from '../user-video/user-video';

import { authorizObj, mainApiPath } from '../../../variables';

export default function requestData(channelName, signal) {
  return async (dispatch) => {
    try {
      dispatch(dataRequestSended());
      if (!channelName) {
        throw new Error(400);
      }
      const loginData = await fetch(`${mainApiPath}users?login=${channelName}`, { ...authorizObj, signal });
      const parsedUserData = await loginData.json();
      if (!parsedUserData.data.length) {
        throw new Error(404);
      }
      const videosData = await fetch(`${mainApiPath}videos?user_id=${parsedUserData.data[0].id}`, authorizObj);
      const parsedVideosData = await videosData.json();
      dispatch(dataReceived(parsedVideosData));
    } catch (err) {
      dispatch(dataNotReceived(err.message));
    }
  };
}
