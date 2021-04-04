import React from 'react';

import Loading from '../load-status/loading/loading';

import Container from './styled';

export default function SuspenseFallback() {
  return (
    <Container>
      <Loading />
    </Container>
  );
}
