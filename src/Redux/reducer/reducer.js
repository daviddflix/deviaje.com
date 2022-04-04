import { GET_FLIGHTS_INFO, FLIGHTS_NO_FOUND,  STOP_FILTER } from "../actions/constants";

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
