import { FETCHING_SMURF, FETCHED_SMURF, FETCH_SMURF_FAIL, POSTING_SMURF, ADD_SMURF } from '../actions';

const initialState = {
  smurfs:   []
}
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_SMURF:
          console.log('before rendering',state)
            return {
                ...state, 
                
            }

        case FETCHED_SMURF:
            console.log('after rendering',state)
            return {
                ...state, smurfs: action.payload
               
            }

            case POSTING_SMURF:

              return {
                ...state, smurfs: [...state.smurfs ]
            };
            
        case ADD_SMURF:
            return {
      
                ...state, smurfs: [...state.smurfs, action.payload]

            }
        
            default: return state;
    }
} 