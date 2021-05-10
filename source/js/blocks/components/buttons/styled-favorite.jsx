import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { IN_FAVORITE_COLOR, MEDIA_SIZES, WHITE_COLOR } from '../../../style/variables';

export const Svg = styled.svg`
  fill: ${(props) => props.fillColor || WHITE_COLOR};
  transition: fill .6s;
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  top: 3%;
  right: 2%;
  display: block;
  transition: opacity .6s;
  z-index: 101;

  &:hover + a::after,
  &:focus + a::after {
    display: flex;
  }

  &:hover ${Svg},
  &:focus-visible ${Svg} {
    fill: ${IN_FAVORITE_COLOR};
  }

  & > svg {
    width: 40px;
    height: 40px;
  }

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    & > svg {
      width: 25px;
      height: 25px;
    }
  }
`;

export const LinkToFavoritePage = styled(NavLink)`
  display: flex;
  transition: opacity .6s;

  &.active ${Svg} {
    fill: red;
  }

  &:hover,
  &:focus {
    opacity: .6;
  }

  &:active {
    opacity: .3;
  }
`;
