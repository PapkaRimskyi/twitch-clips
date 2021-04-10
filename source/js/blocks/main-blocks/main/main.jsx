/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';

import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { requestVideo, requestMoreVideo } from '../../../redux/actions/thunk-action/request-data';
import { addToFavorite } from '../../../redux/actions/favorite/favorite';
import { dataReset } from '../../../redux/actions/user-video/user-video';

import MainTag from './styled-main';

import SuspenseFallback from '../../components/blocks/suspense-fallback/suspense-fallback';

const UserVideo = lazy(() => import('./user-video/user-video'));
const Favorite = lazy(() => import('./favorite/favorite'));

function Main({ videoList, favoriteList, getVideo, getMoreVideo, addFavorite, resetData }) {
  // После монтирования сработает useEffect, который попытается найти коллекцию избранного favoriteList в localStorage.
  // Если найдёт, то запушит в redux.

  useEffect(() => {
    const localStorageFavoriteList = JSON.parse(localStorage.getItem('favoriteList'));
    if (localStorageFavoriteList && localStorageFavoriteList.length) {
      addFavorite(localStorageFavoriteList);
    }
  }, []);

  //

  return (
    <MainTag>
      <Suspense fallback={<SuspenseFallback />}>
        <Switch>
          <Route
            path="/channel"
            render={(props) => (
              <UserVideo
                {...props}
                videoList={videoList}
                favoriteList={favoriteList}
                getVideo={getVideo}
                getMoreVideo={getMoreVideo}
                addFavorite={addFavorite}
                resetData={resetData}
              />
            )}
          />
          <Route exact path="/favorite" render={(props) => (<Favorite {...props} favoriteList={favoriteList} />)} />
        </Switch>
      </Suspense>
    </MainTag>
  );
}

Main.propTypes = {
  videoList: PropTypes.shape({
    requested: PropTypes.bool.isRequired,
    data: PropTypes.objectOf(PropTypes.string),
    err: PropTypes.string,
  }).isRequired,
  favoriteList: PropTypes.arrayOf(PropTypes.object).isRequired,
  getVideo: PropTypes.func.isRequired,
  getMoreVideo: PropTypes.func.isRequired,
  addFavorite: PropTypes.func.isRequired,
  resetData: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    videoList: state.videoList,
    favoriteList: state.favoriteList,
  };
}

const mapDispatchToProps = {
  getVideo: requestVideo,
  getMoreVideo: requestMoreVideo,
  addFavorite: addToFavorite,
  resetData: dataReset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
