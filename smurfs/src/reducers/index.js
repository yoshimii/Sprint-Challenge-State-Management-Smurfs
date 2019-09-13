import { FETCHING_SMURF, FETCHED_SMURF, FETCH_SMURF_FAIL, POSTING_SMURF, ADD_SMURF } from '../actions';

const initialState = {
  smurfs:   [
    {
      name: "Brainey",
      age: 200,
      height: "5cm",
      id: 0
    }
  ]
}
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_SMURF:
            return {
                ...state, 
                
            }

        case FETCHED_SMURF:
            return {
                ...state
            }

            case POSTING_SMURF:

              return {
                ...state
            };
            
        case ADD_SMURF:
            return {
      
                ...state, smurfs: [...state.smurfs, {name: action.payload, age: '', height:'', id: '' }]

            }
        
            default: return state;
    }
} 