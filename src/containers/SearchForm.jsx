import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setPlace, startSearch } from '../actions/index';

import './SearchForm.scss';

const SearchForm = (props) => (
  <form
    className="search-form"
    onSubmit={(e) => {
      e.preventDefault();
      props.history.push(`/?place=${props.place}`);
      props.startSearch();
    }}
  >
    <input
      className="place-input"
      size="30"
      value={props.place}
      type="text"
      onChange={(e) => {
        e.preventDefault()
        props.setPlace(e.target.value)
      }}
    />
    <input type="submit" value="検索" className="submit-button"/>
  </form>
);
SearchForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired,
  place: PropTypes.string,
  startSearch: PropTypes.func.isRequired,
  setPlace: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  place: state.place,
});

export default connect(
  mapStateToProps, { setPlace, startSearch }
)(SearchForm);

