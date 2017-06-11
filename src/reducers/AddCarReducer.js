const initialState = {
  carName: '',
  carPriority: 1,
};

const AddCarReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_CAR_UPDATE_FORM':
    return {
      ...state,
      carName: action.payload.carName,
      carPriority: action.payload.carPriority,
    };
  default:
    return state;
  }
};

export default AddCarReducer;
