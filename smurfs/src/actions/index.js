import axios from 'axios';

export const FETCHING_SMURF = 'FETCHING_SMURF';
export const FETCHED_SMURF = 'FETCHED_SMURF';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';

export const getSmurfs = () => dispatch => {
dispatch({ type: FETCHING_SMURF });
axios.get('http://localhost:3333/smurfs').then( res => {console.log(res)
    dispatch({ type: FETCHED_SMURF, payload: res.data})
    }).catch(err => {
        dispatch({ type: FETCH_SMURF_FAIL });
    });
};