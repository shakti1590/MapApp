import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';

const RegionInfo = ({ regionInfo }) => {
  if (!regionInfo) {
    return null;
  }

  const { currency, speed, distance, volume, timezone } = regionInfo;
  return (
    <Card style={{ margin: '20px', width: '300px' }}>
      <h3>Region Information</h3>
      <p>Currency: {currency}</p>
      <p>Speed: {speed}</p>
      <p>Distance: {distance}</p>
      <p>Volume: {volume}</p>
      <p>Timezone: {timezone}</p>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  regionInfo: state.regionInfo,
});

export default connect(mapStateToProps)(RegionInfo);
