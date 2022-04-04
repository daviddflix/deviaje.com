import { GET_FLIGHTS_INFO, FLIGHTS_NO_FOUND } from "../actions/constants";

const initialState = {
  flights: [],
  allFlights: [],
  modalErr : false
};

export default function reducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case GET_FLIGHTS_INFO:
      return {
        ...state,
        flights: action.payload,
        allFlights: action.payload
      };
    case FLIGHTS_NO_FOUND:
      return {
        ...state,
        flights: [],
        allFlights: [],
        modalErr: action.payload
      }
    default:
      return state;
  }
}
