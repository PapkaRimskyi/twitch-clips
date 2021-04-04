import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { removeFromFavorite } from '../../../../redux/actions/favorite/favorite';

import FavoriteButton from '../../buttons/favorite-button/favorite-button';

import defineWidthAndHeightImage from '../../../../utils/define-width-and-height-image';

import { VideoList, VideoItem, LinkToVideo, Img, Empty } from './styled';

import { IMG_SIZES, MEDIA_SIZES } from '../../../../style/variables';

function VideoCollection({ postData, postDataLength, favoriteList, addFavorite, removeFavorite }) {
  // Компонент рендерится в двух местах: в избранном и при рендере списка с видео пользователя.
  // В случае, если рендерится список с видео пользователя, то передаются и postData и favoriteList пропс.
  // Но если пользователь зашёл в раздел "Избранное", то в postData будет находится favoriteList, а сам favoriteList будет пустым.
  // Для этого и завёл константу data.

  const data = favoriteList || postData;

  //

  // Обработчик на кнопку добавить в избранное.

  function favoriteHandler(e) {
    if (e.target.closest('BUTTON')) {
      const button = e.target.closest('BUTTON');
      const isVideoInFavorite = data.find((clip) => clip.id === button.id);
      if (isVideoInFavorite) {
        removeFavorite(isVideoInFavorite.id);
      } else {
        const clipVideo = postData.find((clip) => clip.id === button.id);
        addFavorite([clipVideo]);
      }
    }
  }

  //

  return (
    postDataLength
      ? (
        <VideoList onClick={favoriteHandler}>
          {postData.map((clip) => (
            <VideoItem key={clip.id}>
              <FavoriteButton id={clip.id} inFavorite={Boolean(data.find((item) => item.id === clip.id))} />
              <LinkToVideo href={`${clip.url}`} target="_blank" clipTitle={clip.title}>
                <picture>
                  <source srcSet={defineWidthAndHeightImage(clip.thumbnail_url, ...IMG_SIZES.desktop)} media={`(min-width: ${MEDIA_SIZES.desktop})`} />
                  <source srcSet={defineWidthAndHeightImage(clip.thumbnail_url, ...IMG_SIZES.tablet)} media={`(min-width: ${MEDIA_SIZES.tablet})`} />
                  <source srcSet={defineWidthAndHeightImage(clip.thumbnail_url, ...IMG_SIZES.mobileToTablet)} media={`(min-width: ${MEDIA_SIZES.mobileToTablet})`} />
                  <Img src={defineWidthAndHeightImage(clip.thumbnail_url, ...IMG_SIZES.mobile)} alt="Thumbnail" />
                </picture>
              </LinkToVideo>
            </VideoItem>
          ))}
        </VideoList>
      )
      : <Empty>Nothing...</Empty>
  );
}

VideoCollection.propTypes = {
  postData: PropTypes.arrayOf(PropTypes.object).isRequired,
  postDataLength: PropTypes.number.isRequired,
  favoriteList: PropTypes.arrayOf(PropTypes.object),
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func.isRequired,
};

VideoCollection.defaultProps = {
  favoriteList: null,
  addFavorite: null,
};

const mapDispatchToProps = {
  removeFavorite: removeFromFavorite,
};

export default connect(null, mapDispatchToProps)(VideoCollection);
