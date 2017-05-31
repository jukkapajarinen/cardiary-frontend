export function updateCars(carsArray) {
  return {
    type: 'ADD_REFUEL_UPDATE_CARS',
    payload: {'carsArray': carsArray}
  };
}

export function updateForm(car, date, distance, volume, price, notes) {
  return {
    type: 'ADD_REFUEL_UPDATE_FORM',
    payload: {
      'car': car,
      'date': date,
      'distance': distance,
      'volume': volume,
      'price': price,
      'notes': notes
    }
  };
}