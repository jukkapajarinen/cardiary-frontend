export function updateCars(carsArray) {
  return {
    type: 'UPDATE_CARS',
    payload: {'carsArray': carsArray}
  };
}

export function updateAddRefuel(car, date, distance, volume, price, notes) {
  return {
    type: 'UPDATE_ADD_REFUEL',
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