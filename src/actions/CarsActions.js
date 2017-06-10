export function updateData(carsArray) {
  return {
    type: 'CARS_UPDATE_DATA',
    payload: {
      'carsArray': carsArray
    }
  };
}

export function updatePagination(numPages, activePage) {
  return {
    type: 'CARS_UPDATE_PAGINATION',
    payload: {
      'numPages': numPages,
      'activePage': activePage
    }
  };
}