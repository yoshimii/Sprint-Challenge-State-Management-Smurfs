import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, postSmurfs } from '../actions';


const Smurfs = ({ getSmurfs, smurf}) => {
    const [ newSmurf, setSmurf ] = useState('');

    useEffect(() => {
        getSmurfs();
    }, [getSmurfs]);
    
    // if (isFetching) {
    //     return <h6>Fetching smurfs!</h6>;
    // }

    const handleChanges = e => {
        e.preventDefault();
        setSmurf(e.target.value);
    }

    console.log(postSmurfs)

    const handleSubmit = e => {
        e.preventDefault();
        getSmurfs(smurf);
        setSmurf('');
        console.log(smurf)
        console.log(newSmurf)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
           <input type='text'
            name='newsmurf'
            placeholder='Enter a name'
            onChange={handleChanges}
            value={newSmurf}></input>
            <button onClick={getSmurfs}>Add new smurf.</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        state: state
    }
}

export default connect(
    mapStateToProps,
    { getSmurfs }
)(Smurfs);