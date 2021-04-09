import React from 'react';
import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';

import TryAgainButton from './styled-try-load-again';

export default function TryLoadAgain({ dataRequest, signal }) {
  const location = useLocation();

  // Повторный запрос.

  function sendRequestAgain(e) {
    e.preventDefault();
    dataRequest(location, signal);
  }

  //

  return (
    <TryAgainButton type="button" onClick={sendRequestAgain}>Try again</TryAgainButton>
  );
}

TryLoadAgain.propTypes = {
  dataRequest: PropTypes.func.isRequired,
  signal: PropTypes.shape({
    aborted: PropTypes.bool,
    onabort: PropTypes.func,
  }).isRequired,
};
