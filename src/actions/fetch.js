import flights from "../dummy/data";

export const FETCH_FLIGHTS = "FETCH_FLIGHTS";

export const fetchFlights = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_FLIGHTS,
      payload: flights
    });
  };
};
