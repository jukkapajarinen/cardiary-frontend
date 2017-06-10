export function updateData(refuelsArray) {
  return {
    type: 'REFUELS_UPDATE_DATA',
    payload: {
      'refuelsArray': refuelsArray
    }
  };
}

export function updatePagination(numPages, activePage) {
  return {
    type: 'REFUELS_UPDATE_PAGINATION',
    payload: {
      'numPages': numPages,
      'activePage': activePage
    }
  };
}

export function updateCars(carsArray) {
  return {
    type: 'REFUELS_UPDATE_CARS',
    payload: {'carsArray': carsArray}
  };
}