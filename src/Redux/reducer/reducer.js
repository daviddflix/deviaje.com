import { GET_FLIGHTS_INFO } from "../actions/constants";

const initialState = {
  flights: [],
  allFlights: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_FLIGHTS_INFO:
      return {
        ...state,
        flights: action.payload,
        allFlights: action.payload,
      };

    default:
      return state;
  }
}
