const initialState = {
  carsArray: [],
  pageSize: 10,
  numPages: 1,
  activePage: 1
};

const CarsReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'CARS_UPDATE_DATA':
    return {
      ...state,
      carsArray: action.payload.carsArray
    };
  case 'CARS_UPDATE_PAGINATION':
    return {
      ...state,
      numPages: action.payload.numPages,
      activePage: action.payload.activePage
    };
  default:
    return state;
  }
};

export default CarsReducer;
