import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import _ from 'lodash';
import queryString from 'query-string';
import SearchForm from '../containers/SearchForm';
import { startSearch } from '../actions/index';
import GeocodeResult from './GeoCodeResult';
import Map from './Map';
import HotelsTable from './HotelsTable';
import 'normalize.css';
import './SearchPage.scss';

class SearchPage extends Component {
  componentDidMount() {
    this.props.dispatch(startSearch());
  }

  render() {
    return (
      <div className="searchpage">
        <h1 className="searchpage-title">ホテル検索</h1>
        <SearchForm history={this.props.history}/>
        <div className="searchpage-result">
          <Map location={this.props.geocodeResult.location}/>
          <div className="searchpage-result-right">
            <GeocodeResult
              address={this.props.geocodeResult.address}
              location={this.props.geocodeResult.location}
            />
            <h2>ホテル検索結果</h2>
            <HotelsTable />
          </div>
        </div>
      </div>
    );
  }
}
SearchPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
  geocodeResult: PropTypes.shape({
    address: PropTypes.string.isRequired,
    location: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }).isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  geocodeResult: state.geocodeResult,
});

export default connect(
  mapStateToProps,
)(SearchPage);

