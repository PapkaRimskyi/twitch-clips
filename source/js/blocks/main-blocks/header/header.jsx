import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';

import LinkToFavoriteButton from '../../components/buttons/link-to-favorite-button/link-to-favorite-button';

import { HeaderTag, Container, Form, Fieldset, InputLabel, Input, SubmitButton } from './styled-header';

function Header({ loadStatus }) {
  const [searchText, setSearchText] = useState('');
  const history = useHistory();

  // Обновляю стейт инпута

  function changeSearchText(e) {
    e.preventDefault();
    setSearchText(e.target.value);
  }

  //

  // Изменяю роут, сбрасываю значение input.

  function preventSubmitForm(e) {
    e.preventDefault();
    if (!loadStatus) {
      history.push(`/channel/?channelName=${searchText.toLowerCase()}`);
      setSearchText('');
    }
  }

  //

  return (
    <HeaderTag>
      <Container>
        <Form method="GET" onSubmit={preventSubmitForm}>
          <Fieldset>
            <InputLabel htmlFor="search-input">Write channel name</InputLabel>
            <Input id="search-input" placeholder="forsen" title="Field for search" value={searchText} onChange={changeSearchText} required />
          </Fieldset>
          <SubmitButton type="submit">Search</SubmitButton>
        </Form>
        <LinkToFavoriteButton />
      </Container>
    </HeaderTag>
  );
}

Header.propTypes = {
  loadStatus: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    loadStatus: state.videoList.requested,
  };
}

export default connect(mapStateToProps)(Header);
