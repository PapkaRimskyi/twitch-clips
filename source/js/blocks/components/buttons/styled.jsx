import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { IN_FAVORITE_COLOR, WHITE_COLOR } from '../../../style/variables';

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
  z-index: 2000;

  &:hover + a::after,
  &:focus + a::after {
    display: flex;
  }

  &:hover ${Svg},
  &:focus ${Svg} {
    fill: ${IN_FAVORITE_COLOR};
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
