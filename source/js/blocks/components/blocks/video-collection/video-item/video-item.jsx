import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { IMG_SIZES, MEDIA_SIZES } from '../../../../../style/variables';

import defineImageSize from '../../../../../utils/define-image-size';

import FavoriteButton from '../../../buttons/favorite-button/favorite-button';
import { VideoItem as Item, LinkToVideo, Img } from '../styled-video-collection';

export default class VideoItem extends PureComponent {
  render() {
    const { id, url, title, thumbnail_url: thumbnailUrl } = this.props.clip;
    return (
      <Item>
        <FavoriteButton id={id} inFavorite={this.props.inFavorite} />
        <LinkToVideo href={`${url}`} target="_blank" clipTitle={title}>
          <picture>
            <source srcSet={defineImageSize(thumbnailUrl, ...IMG_SIZES.desktop)} media={`(min-width: ${MEDIA_SIZES.desktop})`} />
            <source srcSet={defineImageSize(thumbnailUrl, ...IMG_SIZES.tablet)} media={`(min-width: ${MEDIA_SIZES.tablet})`} />
            <source srcSet={defineImageSize(thumbnailUrl, ...IMG_SIZES.mobileToTablet)} media={`(min-width: ${MEDIA_SIZES.mobileToTablet})`} />
            <Img src={defineImageSize(thumbnailUrl, ...IMG_SIZES.mobile)} loading="lazy" alt="VOD preview" />
          </picture>
        </LinkToVideo>
      </Item>
    );
  }
}

VideoItem.propTypes = {
  clip: PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
    thumbnail_url: PropTypes.string,
  }).isRequired,
  inFavorite: PropTypes.bool,
};

VideoItem.defaultProps = {
  inFavorite: false,
};
