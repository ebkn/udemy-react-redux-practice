import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setSortKey } from '../actions/index';

import './HotelsClickableTh.scss';

const HotelsClickableTh = (props) => (
  <th
    className="hotels-clickable-th"
    onClick={() => props.setSortKey(props.sortKey)}
  >
    {props.label}{props.isSelected ? '▲' : ''}
  </th>
);

HotelsClickableTh.propTypes = {
  label: PropTypes.string.isRequired,
  sortKey: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  setSortKey: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  isSelected: ownProps.sortKey === state.sortKey,
});

export default connect(
  mapStateToProps, { setSortKey }
)(HotelsClickableTh);

