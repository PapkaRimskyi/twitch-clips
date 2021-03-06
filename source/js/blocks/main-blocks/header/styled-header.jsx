import styled from 'styled-components';

import { BLACK_COLOR, MARGIN_AUTO, MEDIA_SIZES } from '../../../style/variables';

export const HeaderTag = styled.header`
  position: fixed;
  top: 0;
  padding: 10px 0;
  width: 100%;
  border-bottom: 2px solid rgb(236, 236, 236);
  border-top: 2px solid rgb(236, 236, 236);
  background-color: rgb(248, 247, 248);
  z-index: 1000;
`;

export const Container = styled.div`
  margin: ${MARGIN_AUTO};
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    width: 80%;
    justify-content: space-between;
  }
`;

export const Form = styled.form`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  align-items: flex-end;

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    margin-right: 20px;
    margin-bottom: 0;
    width: 80%;
    flex-wrap: nowrap;
  }

  @media (min-width: ${MEDIA_SIZES.desktop}px) {
    width: auto;
  }
`;

export const Fieldset = styled.fieldset`
  display: flex;
  justify-content: flex-start;


  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    margin-right: 25px;
    margin-bottom: 0;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Input = styled.input`
  padding: 5px 10px;
  width: 70%;
  font-size: 1.5rem;
  line-height: 1.7rem;
  border: none;
  border-bottom: 1px solid ${BLACK_COLOR};
  transition: opacity .5s;
  opacity: .5;

  &::placeholder {
    font-size: inherit;
    line-height: inherit;
  }

  &:hover,
  &:focus {
    opacity: 1;
  }

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    width: 40%;
  }
`;

export const InputLabel = styled.label`
  margin-bottom: 15px;
  display: none;
  font-size: 1.5rem;
  line-height: 1.7rem;
  cursor: pointer;

  &:hover ~ ${Input} {
    opacity: 1;
  }

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    margin-bottom: 0;
    display: inline;
  }
`;

export const SubmitButton = styled.button`
  margin-left: auto;
  padding: 5px 10px;
  max-width: 200px;
  width: 50%;
  display: block;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: ${BLACK_COLOR};
  border: 2px solid rgb(223, 223, 233);
  border-radius: 5px;
  background-color: #fff;
  transition: opacity .5s;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: .6;
  }

  &:active {
    opacity: .3;
  }

  @media (min-width: ${MEDIA_SIZES.tablet}px) {
    margin: 0;
    width: auto;
    display: inline-block;
  }
`;
