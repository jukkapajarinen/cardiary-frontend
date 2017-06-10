const initialState = {
  refuelsArray: [],
  pageSize: 10,
  numPages: 1,
  activePage: 1
};

const RefuelsReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'REFUELS_UPDATE_DATA':
    return {
      ...state,
      refuelsArray: action.payload.refuelsArray
    };
  case 'REFUELS_UPDATE_PAGINATION':
    return {
      ...state,
      numPages: action.payload.numPages,
      activePage: action.payload.activePage
    };
  default:
    return state;
  }
};

export default RefuelsReducer;
