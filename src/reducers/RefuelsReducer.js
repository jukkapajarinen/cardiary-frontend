const initialState = {refuelsArray: [], pages: 10, currentPage: 1};

const RefuelsReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'UPDATE_REFUELS':
    return {
      ...state,
      refuelsArray: action.payload.refuelsArray,
      pages: action.payload.pages,
      currentPage: action.payload.currentPage
    };
  default:
    return state;
  }
};

export default RefuelsReducer;
