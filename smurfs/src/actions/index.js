import axios from 'axios';

export const FETCHING_SMURF = 'FETCHING_SMURF';
export const FETCHED_SMURF = 'FETCHED_SMURF';
export const POSTING_SMURF = 'POSTING_SMURF';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';
export const ADD_SMURF = 'ADD_SMURF';


export const getSmurfs = () => dispatch => {
dispatch({ type: FETCHING_SMURF });
axios.get('http://localhost:3333/smurfs').then( res => {console.log(res)
    dispatch({ type: FETCHED_SMURF, payload: res.data})
    }).catch(err => {
        dispatch({ type: FETCH_SMURF_FAIL });
    });
};

export const postSmurfs = (smurf) => dispatch => {
    dispatch({ type: POSTING_SMURF });
    axios.post('http://localhost:3333/smurfs', smurf).then( res => {console.log(res)
        dispatch({ type: ADD_SMURF, payload: res.data})
        }).catch(err => {
            dispatch({ type: FETCH_SMURF_FAIL });
        });
    };