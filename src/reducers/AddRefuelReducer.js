const initialState = {
  carsArray: [],
  car: 1,
  date: '',
  distance: '',
  volume: '',
  price: '',
  notes: ''
};

const AddRefuelReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_REFUEL_UPDATE_CARS':
    return {
      ...state,
      carsArray: action.payload.carsArray
    };
  case 'ADD_REFUEL_UPDATE_FORM':
    return {
      ...state,
      car: action.payload.car,
      date: action.payload.date,
      distance: action.payload.distance,
      volume: action.payload.volume,
      price: action.payload.price,
      notes: action.payload.notes
    };
  default:
    return state;
  }
};

export default AddRefuelReducer;
