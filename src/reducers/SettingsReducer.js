const initialState = {
  consumptionUnit: 'l/100km',
  currencyUnit: '€',
  volumeUnit: 'l',
  distanceUnit: 'km',
  consumptionUnitChoices: [],
  volumeUnitChoices: [],
  distanceUnitChoices: []
};

const SettingsReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SETTINGS_UPDATE_FORM':
    return {
      ...state,
      consumptionUnit: action.payload.consumptionUnit,
      currencyUnit: action.payload.currencyUnit,
      volumeUnit: action.payload.volumeUnit,
      distanceUnit: action.payload.distanceUnit
    };
  case 'SETTINGS_UPDATE_CHOICES':
    return {
      ...state,
      consumptionUnitChoices: action.payload.consumptionUnitChoices,
      volumeUnitChoices: action.payload.volumeUnitChoices,
      distanceUnitChoices: action.payload.distanceUnitChoices
    };
  default:
    return state;
  }
};

export default SettingsReducer;
