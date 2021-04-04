/* eslint-disable no-nested-ternary */
import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import usePrevious from '../../../../custom-hooks/use-previous';

import LoadStatus from '../../../components/blocks/load-status/load-status';

import VideoCollection from '../../../components/blocks/video-collection/video-collection';

import VisuallyHidden from '../../../../style/uniq-component/visually-hidden';
import setDocumentTitle from '../../../../utils/set-document-title';

export default function UserVideo({ location, videoList, dataRequest, favoriteList, addFavorite }) {
  const currentLocation = useMemo(() => `${location.pathname}/${location.search}`, [`${location.pathname}/${location.search}`]);
  const prevLocation = usePrevious(currentLocation);

  const abortController = useMemo(() => new AbortController(), [currentLocation]);

  // При изменении currentLocation происходит запрос данных.

  useEffect(() => {
    dataRequest(location, abortController.signal);
    setDocumentTitle(`${location.search.slice(1)} videos`);
    return () => {
      abortController.abort();
    };
  }, [currentLocation]);

  //

  // prevLocation === currentLocation. Предотвращаю рендеринг компонента, если пользователь вернулся по роуту назад.

  return (
    <section>
      <VisuallyHidden>User videos.</VisuallyHidden>
      {videoList.requested || videoList.err
        ? <LoadStatus postData={videoList} dataRequest={dataRequest} signal={abortController.signal} />
        : (
          prevLocation === currentLocation
            ? <VideoCollection postData={videoList.info.data} postDataLength={videoList.info.data.length} favoriteList={favoriteList} addFavorite={addFavorite} />
            : null
        )}
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
};
