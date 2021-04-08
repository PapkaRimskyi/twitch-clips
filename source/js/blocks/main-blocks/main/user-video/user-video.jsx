/* eslint-disable no-restricted-syntax */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import * as qs from 'query-string';

import LoadStatus from '../../../components/blocks/load-status/load-status';

import VideoCollection from '../../../components/blocks/video-collection/video-collection';

import VisuallyHidden from '../../../../style/uniq-component/visually-hidden';
import setDocumentTitle from '../../../../utils/set-document-title';

export default function UserVideo({ location, videoList, dataRequest, favoriteList, addFavorite, resetData }) {
  const channelName = useMemo(() => qs.parse(location.search).channelName, [qs.parse(location.search).channelName]);

  const abortController = new AbortController();

  // При изменении currentLocation происходит запрос данных.

  useEffect(() => {
    dataRequest(channelName, abortController.signal);
    setDocumentTitle(`${channelName} videos`);
    return () => {
      abortController.abort();
      resetData();
    };
  }, [channelName]);

  //

  return (
    <section>
      <VisuallyHidden>User videos</VisuallyHidden>
      {videoList.requested || videoList.err
        ? <LoadStatus postData={videoList} dataRequest={dataRequest} signal={abortController.signal} />
        : <VideoCollection postData={videoList.info ? videoList.info.data : null} favoriteList={favoriteList} addFavorite={addFavorite} />}
    </section>
  );
}

UserVideo.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  videoList: PropTypes.shape({
    requested: PropTypes.bool.isRequired,
    info: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
      pagination: PropTypes.shape({
        cursor: PropTypes.string,
      }),
    }),
    err: PropTypes.string,
  }).isRequired,
  dataRequest: PropTypes.func.isRequired,
  favoriteList: PropTypes.arrayOf(PropTypes.object).isRequired,
  addFavorite: PropTypes.func.isRequired,
  resetData: PropTypes.func.isRequired,
};
