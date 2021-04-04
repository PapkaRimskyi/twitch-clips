import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import VideoCollection from '../../../components/blocks/video-collection/video-collection';
import VisuallyHidden from '../../../../style/uniq-component/visually-hidden';
import setDocumentTitle from '../../../../utils/set-document-title';

export default function Favorite({ favoriteList }) {
  useEffect(() => {
    setDocumentTitle('Favorite page');
  }, []);

  return (
    <section>
      <VisuallyHidden>Your favorite list</VisuallyHidden>
      <VideoCollection postData={favoriteList} postDataLength={favoriteList.length} />
    </section>
  );
}

Favorite.propTypes = {
  favoriteList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
