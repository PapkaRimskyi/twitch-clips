import styled from 'styled-components';

import { HEADER_HEIGHT, MARGIN_AUTO, MEDIA_SIZES } from '../../../style/variables';

const MainTag = styled.main`
  margin: ${MARGIN_AUTO};
  margin-top: calc(${HEADER_HEIGHT.mobile}px + 10px);
  width: 90%;

  @media (min-width: ${MEDIA_SIZES.mobileToTablet}) {
    margin-top: calc(${HEADER_HEIGHT.mobileToTablet}px + 10px);
  }

  @media (min-width: ${MEDIA_SIZES.tablet}) {
    margin-top: calc(${HEADER_HEIGHT.tablet}px + 10px);
  }

  @media (min-width: ${MEDIA_SIZES.desktop}) {
    margin-top: calc(${HEADER_HEIGHT.desktop}px + 10px);
  }
`;

export default MainTag;
