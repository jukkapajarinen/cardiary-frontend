export function updateForm(carName, carPriority) {
  return {
    type: 'ADD_CAR_UPDATE_FORM',
    payload: {
      'carName': carName,
      'carPriority': carPriority
    }
  };
}