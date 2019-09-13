import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';


const Smurfs = ({ getSmurfs, smurf}) => {
    useEffect(() => {
        getSmurfs();
    }, [getSmurfs]);
    
    // if (isFetching) {
    //     return <h6>Fetching smurfs!</h6>;
    // }

    return (
        <div>
           
            <button onClick={getSmurf}>Get New Quote</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        state = state
    }
}

export default connect(
    mapStateToProps,
    { getSmurfs }
)(Smurfs);