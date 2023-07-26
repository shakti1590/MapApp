export const setRegion = (region) => ({
  type: 'SET_REGION',
  payload: region,
});

export const setRegionInfo = (regionData) => ({
  type: 'SET_REGION_INFO',
  payload: regionData,
});

export const clearRegionInfo = () => ({
  type: 'CLEAR_REGION_INFO',
});

