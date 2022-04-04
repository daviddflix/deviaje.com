import { GET_FLIGHTS_INFO, STOP_FILTER } from "../actions/constants";

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

      case STOP_FILTER:
        console.log(action.payload)
        const filtered = action.payload === 'direct'? state.flights.data.filter(p => {
           return p.route.length === 1
        }) : state.flights.data.filter(p => {
          if(action.payload === '1'){
            return p.route.length === 2
          } else {
            return p.route.length >= 3
          }
       })
        return {
          ...state,
          allFlights: filtered,
          
        };
  

    default:
      return state;
  }
}
