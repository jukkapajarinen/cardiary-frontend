/**
 * Created by jukka on 04/05/2017.
 */
const greetingReducer = (state = {greeting: "Car diary"}, action) => {
    switch (action.type) {
        case "SET_GREETING":
            state = {
                ...state,
                greeting: action.payload
            };
            break;
        default:
            break;
    }
    return state;
};

export default greetingReducer;