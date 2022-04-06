import { GET_FLIGHTS_INFO, FLIGHTS_NO_FOUND,  STOP_FILTER, DATE_FILTER, PRICE_FILTER } from "../actions/constants";

const initialState = {
  flights: [],
  allFlights: [],
  modalErr : false
};

export default function reducer(state = initialState, action) {
  
  switch (action.type) {

    case GET_FLIGHTS_INFO:
      return {
        ...state,
        flights: action.payload,
        allFlights: action.payload.data
      };

      case STOP_FILTER:
        console.log(action.payload)
        let filterStops = action.payload === 'direct'? state.flights.data.filter(p => {
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
          allFlights: filterStops,
          
        };
        case DATE_FILTER:
          const filterDate = action.payload === 'date'? state.flights.data.sort((a,b) => (a.local_departure > b.local_departure ? 1 : -1)): state.flights.sort((a, b) => (a.local_departure > b.local_departure ? -1 : 1))
          return{
            ...state,
            allFlights: filterDate,
          }
          case PRICE_FILTER:
          const filterPrice =  state.flights.data.filter(p =>  (p.price * 1.8).toFixed() <= action.payload)
          return{
            ...state,
            allFlights: filterPrice,
          };

          // case SCHEDULE_FILTER:
          // const filterSchedule = action.payload === 'day'? state.flights.data.filter(p =>  {
          //   // console.log(parseInt(p.local_departure.slice(12,13)))
          //   // if(p.local_departure.slice(12,13) <= 17 ){
          //   //   return p
          //   // }
          //   for (let i = 0; i < state.flights.data.length; i++) {
          //     if(state.flights.data[i].local_departure <= 17){
          //       return p
          //     }
          //     console.log(parseInt(state.flights.data[i].local_departure.slice(0,1)))              
          //   }
          // })
          //  :  state.flights.data.filter(p =>  parseInt(p.local_departure.substring(12,13)) >= '18')
          // return{
          //   ...state,
          //   allFlights: filterSchedule,
          // }

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
