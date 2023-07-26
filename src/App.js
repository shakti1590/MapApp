import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import { setRegion, setRegionInfo } from './actions';
import HeaderComponent from './components/Header';
import SidebarComponent from './components/Sidebar';
import FooterComponent from './components/Footer';
import MapComponent from './components/Map';
import FormInput from './components/FormInput';
import RegionInfo from './components/RegionInfo';
const { Content } = Layout;
const App = ({ selectedRegion, setRegion, setRegionInfo }) => {
  useEffect(() => {
    if (selectedRegion === 'us') {
      setRegionInfo({
        currency: 'USD',
        speed: 'mph',
        distance: 'miles',
        volume: 'gallons',
        timezone: 'America/New_York',
      });
    } else if (selectedRegion === 'in') {
      setRegionInfo({
        currency: 'INR',
        speed: 'kmph',
        distance: 'kilometers',
        volume: 'liters',
        timezone: 'Asia/Kolkata',
      });
    } else if (selectedRegion === 'uk') {
      setRegionInfo({
        currency: 'GBP',
        speed: 'mph',
        distance: 'miles',
        volume: 'liters',
        timezone: 'Europe/London',
      });
    } else {
      setRegionInfo(null);
    }
  }, [selectedRegion, setRegionInfo]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderComponent />
      <Layout>
        <SidebarComponent>
          <FormInput />
        </SidebarComponent>
        <Layout style={{ overflowY: 'auto' }}>
          <Content style={{ padding: '20px' }}>
            <MapComponent />
          </Content>
          {selectedRegion && <RegionInfo />}
          <FooterComponent />
        </Layout>
      </Layout>
    </Layout>
  );
};
const mapStateToProps = (state) => ({
  selectedRegion: state.selectedRegion,
});
export default connect(mapStateToProps, { setRegion, setRegionInfo })(App);
