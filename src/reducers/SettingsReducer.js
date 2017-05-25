const initialState = {consumptionUnit: 'l/100km', currencyUnit: '€', volumeUnit: 'l', distanceUnit: 'km'};

const SettingsReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'UPDATE_SETTINGS':
    return {
      ...state,
      consumptionUnit: action.payload.consumptionUnit,
      currencyUnit: action.payload.currencyUnit,
      volumeUnit: action.payload.volumeUnit,
      distanceUnit: action.payload.distanceUnit
    };
  default:
    return state;
  }
};

export default SettingsReducer;
