/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styled-load-status';

import Error from './error/error';
import Loading from './loading/loading';

export default function LoadStatus({ postData, dataRequest, signal }) {
  // Определяю, какой компонент вернуть.

  function defineStatus() {
    switch (true) {
      case Boolean(postData.requested):
        return <Loading />;
      case Boolean(postData.err):
        return <Error errCode={postData.err} dataRequest={dataRequest} signal={signal} />;
      default:
        return null;
    }
  }

  //

  return (
    <Container>
      {defineStatus()}
    </Container>
  );
}

LoadStatus.propTypes = {
  postData: PropTypes.shape({
    requested: PropTypes.bool.isRequired,
    data: PropTypes.objectOf(PropTypes.string),
    err: PropTypes.string,
  }).isRequired,
  dataRequest: PropTypes.func.isRequired,
  signal: PropTypes.shape({
    aborted: PropTypes.bool,
    onabort: PropTypes.func,
  }).isRequired,
};
