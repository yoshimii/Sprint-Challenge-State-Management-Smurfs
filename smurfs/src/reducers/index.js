import { FETCHING_SMURF, FETCHED_SMURF, FETCH_SMURF_FAIL } from '../actions';

const initialState = [
    {
      name: "Brainey",
      age: 200,
      height: "5cm",
      id: 0
    }
  ];
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_SMURF:
            return {
                ...state
            }

        // case FETCHED_BEER:
        //     return {
        //         ...state,
        //         isFetching:false,
        //         beer: action.payload
        //     }
        // case FETCH_BEER_FAIL:
        //     return {
        //         ...state,

        //     }
        
            default: return state;
    }
} 