import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, AttributionControl } from 'react-leaflet';
import { connect } from 'react-redux';

const MapComponent = ({ selectedRegion }) => {
    console.log("Selected Region in MapComponent:", selectedRegion);
  const [mapCenter, setMapCenter] = useState([20, 0]); // Default center
  const [zoomLevel, setZoomLevel] = useState(2); // Default zoom level

  useEffect(() => {
    // Set the coordinates and zoom level 
    switch (selectedRegion) {
      case 'us':
        setMapCenter([37.0902, -95.7129]);
        setZoomLevel(4);
        break;
      case 'in':
        setMapCenter([20.5937, 78.9629]);
        setZoomLevel(5);
        break;
      case 'uk':
        setMapCenter([55.3781, -3.4360]);
        setZoomLevel(5);
        break;
      default:
        setMapCenter([20, 0]);
        setZoomLevel(2);
    }
  }, [selectedRegion]);

  return (
    <div style={{ height: 'calc(100vh - 64px)', width: '100%' }}>
      <MapContainer
        center={mapCenter}
        zoom={zoomLevel}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <AttributionControl position="bottomright" prefix="Map data © OpenStreetMap contributors" />
        {selectedRegion && (
          <Marker position={mapCenter}>
            <Popup>
              {selectedRegion === 'us' && <span>United States</span>}
              {selectedRegion === 'in' && <span>India</span>}
              {selectedRegion === 'uk' && <span>United Kingdom</span>}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedRegion: state.selectedRegion,
  regionInfo: state.regionInfo,
});

export default connect(mapStateToProps)(MapComponent);
