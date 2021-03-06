/* eslint-disable no-restricted-syntax */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import * as qs from 'query-string';

import isUserScolledToEnd from '../../../../utils/window-properties';
import debounce from '../../../../utils/debounce';
import setDocumentTitle from '../../../../utils/set-document-title';

import VideoCollection from '../../../components/blocks/video-collection/video-collection';

import VisuallyHidden from '../../../../style/uniq-component/visually-hidden';

import LoadStatus from '../../../components/blocks/load-status/load-status';
import { LoadingSpinnerContainer } from '../../../components/blocks/load-status/styled-load-status';
import Loading from '../../../components/blocks/load-status/loading/loading';

import { DELAY_BEFORE_LOAD } from '../../../../variables';

export default function UserVideo({ location, videoList, favoriteList, getVideo, getMoreVideo, addFavorite, resetData }) {
  const channelName = useMemo(() => qs.parse(location.search).channelName, [qs.parse(location.search).channelName]);

  const abortController = new AbortController();

  const debounceLoadExtraVideo = useMemo(() => debounce(loadExtraVideo, DELAY_BEFORE_LOAD), [videoList.info]);

  // При изменении channelName происходит запрос данных.

  useEffect(() => {
    getVideo(channelName, abortController.signal);
    setDocumentTitle(`${channelName} videos`);
    return () => {
      abortController.abort();
      resetData();
    };
  }, [channelName]);

  //

  // Вешаю обработчик на скролл для загрузки новых видео

  useEffect(() => {
    if (videoList.info && videoList.info.data.length && videoList.info.pagination.cursor) {
      document.addEventListener('scroll', debounceLoadExtraVideo);
    }
    return () => {
      document.removeEventListener('scroll', debounceLoadExtraVideo);
    };
  }, [channelName, videoList.info]);

  //

  // Если пользователь доскролил до конца, то шлётся запрос для загрузки следующих видео

  function loadExtraVideo() {
    if (isUserScolledToEnd() && !videoList.requestedMoreData) {
      getMoreVideo(videoList.info.userID, abortController.signal, videoList.info.pagination.cursor);
    }
  }

  //

  return (
    <section style={{ position: 'relative' }}>
      <VisuallyHidden>User videos</VisuallyHidden>
      {videoList.requested || videoList.err
        ? <LoadStatus postData={videoList} dataRequest={getVideo} signal={abortController.signal} />
        : (
          <>
            <VideoCollection postData={videoList.info && videoList.info.data} favoriteList={favoriteList} addFavorite={addFavorite} />
            {videoList.requestedMoreData && <LoadingSpinnerContainer><Loading /></LoadingSpinnerContainer>}
          </>
        )}
    </section>
  );
}

UserVideo.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  videoList: PropTypes.shape({
    requested: PropTypes.bool.isRequired,
    requestedMoreData: PropTypes.bool.isRequired,
    info: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
      pagination: PropTypes.shape({
        cursor: PropTypes.string,
      }),
      userID: PropTypes.string,
    }),
    err: PropTypes.string,
  }).isRequired,
  getVideo: PropTypes.func.isRequired,
  getMoreVideo: PropTypes.func.isRequired,
  favoriteList: PropTypes.arrayOf(PropTypes.object).isRequired,
  addFavorite: PropTypes.func.isRequired,
  resetData: PropTypes.func.isRequired,
};
