export function updateForm(consumptionUnit, currencyUnit, volumeUnit, distanceUnit) {
  return {
    type: 'SETTINGS_UPDATE_FORM',
    payload: {
      'consumptionUnit': consumptionUnit,
      'currencyUnit': currencyUnit,
      'volumeUnit': volumeUnit,
      'distanceUnit': distanceUnit
    }
  };
}

export function updateChoices(consumptionUnitChoices, volumeUnitChoices, distanceUnitChoices) {
  return {
    type: 'SETTINGS_UPDATE_CHOICES',
    payload: {
      'consumptionUnitChoices': consumptionUnitChoices,
      'volumeUnitChoices': volumeUnitChoices,
      'distanceUnitChoices': distanceUnitChoices
    }
  };
}