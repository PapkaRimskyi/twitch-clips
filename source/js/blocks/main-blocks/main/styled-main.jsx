import styled from 'styled-components';

import { HEADER_HEIGHT, MARGIN_AUTO, MEDIA_SIZES } from '../../../style/variables';

const MainTag = styled.main`
  margin: ${MARGIN_AUTO};
  padding-top: calc(${HEADER_HEIGHT.mobile}px + 10px);
  width: 95%;

  @media (min-width: ${MEDIA_SIZES.tablet}) {
    padding-top: calc(${HEADER_HEIGHT.tablet}px + 10px);
  }

  @media (min-width: ${MEDIA_SIZES.desktop}) {
    padding-top: calc(${HEADER_HEIGHT.desktop}px + 10px);
  }
`;

export default MainTag;
