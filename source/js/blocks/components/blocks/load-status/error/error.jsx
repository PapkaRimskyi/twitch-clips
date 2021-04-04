import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ErrorIcon from './error-icon';

import { ErrorDescription } from '../styled';
import TryAgainButton from '../try-load-again/styled';
import setDocumentTitle from '../../../../../utils/set-document-title';

export default function Error({ errCode, dataRequest, signal }) {
  useEffect(() => {
    setDocumentTitle(defineErrorText());
  }, []);

  // Определяю текст ошибки.

  function defineErrorText() {
    switch (errCode) {
      case '400':
        return 'Wrong search query';
      case '404':
        return 'Not found';
      default:
        return null;
    }
  }

  //

  // Отдаю описание ошибки

  function errorHandler() {
    switch (errCode) {
      case '400':
      case '404':
        return <ErrorDescription>{defineErrorText()}</ErrorDescription>;
      default:
        return <TryAgainButton dataRequest={dataRequest} signal={signal} />;
    }
  }

  //

  return (
    <>
      <ErrorIcon />
      {errorHandler()}
    </>
  );
}

Error.propTypes = {
  errCode: PropTypes.number,
  dataRequest: PropTypes.func.isRequired,
  signal: PropTypes.shape({
    aborted: PropTypes.bool,
    onabort: PropTypes.func,
  }).isRequired,
};

Error.defaultProps = {
  errCode: null,
};
