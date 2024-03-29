import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import './HotelsTable.scss';

import HotelRow from './HotelRow';
import HotelsClickableTh from './HotelsClickableTh';

const HotelsTable = ({ hotels, sortKey, onSort }) => (
  <table>
    <tbody>
      <tr>
        <th>画像</th>
        <th>ホテル名</th>
        <HotelsClickableTh
          label="値段"
          sortKey="price"
        />
        <HotelsClickableTh
          label="レビュー"
          sortKey="reviewAverage"
        />
        <th>レビュー件数</th>
        <th>距離</th>
      </tr>
      {hotels.map(hotel => (<HotelRow key={hotel.id} hotel={hotel} />))}
    </tbody>
  </table>
);

HotelsTable.propTypes = {
  hotels: PropTypes.arrayOf(
    PropTypes.any,
  ).isRequired,
}
HotelsTable.defaultProps = {
  hotels: [],
}

const sortedHotels = (hotels, sortKey) => _.sortBy(hotels, h => h[sortKey]);
const mapStateToProps = (state) => ({
  hotels: sortedHotels(state.hotels, state.sortKey),
});
export default connect(
  mapStateToProps
)(HotelsTable);

