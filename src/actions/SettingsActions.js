export function updateSettings(consumptionUnit, currencyUnit, volumeUnit, distanceUnit) {
  return {
    type: 'UPDATE_SETTINGS',
    payload: {
      'consumptionUnit': consumptionUnit,
      'currencyUnit': currencyUnit,
      'volumeUnit': volumeUnit,
      'distanceUnit': distanceUnit
    }
  };
}