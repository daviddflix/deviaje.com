import { GET_FLIGHTS_INFO } from "./constants";
import { axiosWithOutToken } from '../../services/axios'

export const getFlightsInfo = (payload) => {
  return async (dispatch) => {
    let fechaModificada = payload.dateFrom.split("-").reverse().join("/");
    let fechaModificada2 = payload.dateTo.split("-").reverse().join("/");

    try {
      const response = await axiosWithOutToken(
        `/getflightspost?fly_from=${payload.fly_from}&fly_to=${payload.fly_to}&date_from=${fechaModificada}&date_to=${fechaModificada2}`
      );
      console.log(response)
      return dispatch({
        type: GET_FLIGHTS_INFO,
        payload: response.data,
      });
    } catch ( err ) {
      console.log( err.response );
    }
  };
};
