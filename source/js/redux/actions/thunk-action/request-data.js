import { dataRequestSended, dataReceived, dataNotReceived } from '../user-video/user-video';

import { authorizObj, mainApiPath } from '../../../variables';

export default function requestData(location, signal) {
  return (dispatch) => {
    dispatch(dataRequestSended());
    fetch(`${mainApiPath}users?login=${location.search.slice(1)}`, { ...authorizObj, signal })
      .then((res) => {
        if (res.status === 400 || res.status === 404) {
          return Promise.reject(new Error(res.status));
        }
        return res;
      })
      .then((res) => res.json())
      .then((d) => {
        if (d.data.length) {
          return fetch(`${mainApiPath}videos?user_id=${d.data[0].id}`, authorizObj);
        }
        return Promise.reject(new Error(404));
      })
      .then((res) => res.json())
      .then((data) => dispatch(dataReceived(data)))
      .catch((err) => dispatch(dataNotReceived(err.message)));
  };
}
