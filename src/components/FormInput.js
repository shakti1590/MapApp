import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Select, Button } from 'antd';
import { setRegion, setRegionInfo } from '../actions';

const { Option } = Select;
const regionInfoData = {
  us: {
    currency: 'USD',
    speed: 'mph',
    distance: 'miles',
    volume: 'gallons',
    timezone: 'America/New_York',
  },
  in: {
    currency: 'INR',
    speed: 'kmph',
    distance: 'kilometers',
    volume: 'liters',
    timezone: 'Asia/Kolkata',
  },
  uk: {
    currency: 'GBP',
    speed: 'mph',
    distance: 'miles',
    volume: 'liters',
    timezone: 'Europe/London',
  },
};

const FormInput = ({ setRegion, setRegionInfo }) => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const handleRegionChange = (value) => {
    setSelectedRegion(value);
  };

  const handleLoadClick = () => {
    if (selectedRegion && selectedRegion in regionInfoData) {
      setRegion(selectedRegion);
      // Set the region information based on the selected region
      const regionInfo = regionInfoData[selectedRegion];
      setRegionInfo(regionInfo);
    }
  };

  return (
    <div>
      <Select
        placeholder="Select a region"
        style={{ width: '100%', marginBottom: '16px' }}
        onChange={handleRegionChange}
        value={selectedRegion}
      >
        <Option value="us">United States</Option>
        <Option value="in">India</Option>
        <Option value="uk">United Kingdom</Option>
      </Select>
      <Button
        type="primary"
        style={{ width: '100%' }}
        onClick={handleLoadClick}
      >
        Load
      </Button>
    </div>
  );
};

export default connect(null, { setRegion, setRegionInfo })(FormInput);
