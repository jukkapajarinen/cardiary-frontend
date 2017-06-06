const initialState = {
  statsChoices: ['All'],
  statsSelected: 'All',
  statsTotalRefuels: 0,
  statsTotalPrice: 0,
  statsTotalDistance: 0,
  statsTotalVolume: 0
};

const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'STATISTICS_UPDATE_CHOICES':
    return {
      ...state,
      statsChoices: action.payload.statsChoices
    };
  case 'STATISTICS_UPDATE_DATA':
    return {
      ...state,
      statsSelected: action.payload.statsSelected,
      statsTotalRefuels: action.payload.statsTotalRefuels,
      statsTotalPrice: action.payload.statsTotalPrice,
      statsTotalDistance: action.payload.statsTotalDistance,
      statsTotalVolume: action.payload.statsTotalVolume
    };
  default:
    return state;
  }
};

export default DashboardReducer;
