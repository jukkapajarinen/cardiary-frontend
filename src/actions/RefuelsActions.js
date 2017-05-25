export function updateRefuels(refuelsArray, pages, currentPage) {
  return {
    type: 'UPDATE_REFUELS',
    payload: {
      'refuelsArray': refuelsArray,
      'pages': pages,
      'currentPage': currentPage
    }
  };
}