import styled from 'styled-components';

import { WHITE_COLOR, OUTLINE_COLOR } from '../../../../style/variables';

export const Empty = styled.p`
  font-size: 2rem;
  line-height: 2.2rem;
  text-align: center;
`;

export const VideoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const VideoItem = styled.li`
  position: relative;
  margin: 0 10px;
  margin-bottom: 25px;
  max-width: 500px;
`;

export const LinkToVideo = styled.a`
  position: relative;
  display: inline-block;

  &::after {
    position: absolute;
    content: "${(props) => props.clipTitle}";
    top: 0;
    left: 0;
    padding: 10px;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    text-align: center;
    color: ${WHITE_COLOR};
    background-color: rgba(0, 0, 0, .5);
    box-sizing: border-box;
    transition: box-shadow .6s;
    z-index: 100;
  }

  &:hover,
  &:focus {
    outline-color: ${OUTLINE_COLOR};
  }

  &:hover::after,
  &:focus::after {
    display: flex;
  }

  &:active::after {
    box-shadow: 0 0 30px 8px inset #201f1f;
  }
`;

export const Img = styled.img`
  width: 100%;
  display: block;
`;
