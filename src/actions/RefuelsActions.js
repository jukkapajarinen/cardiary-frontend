export function updateData(refuelsArray, pages, currentPage) {
  return {
    type: 'REFUELS_UPDATE_DATA',
    payload: {
      'refuelsArray': refuelsArray,
      'pages': pages,
      'currentPage': currentPage
    }
  };
}