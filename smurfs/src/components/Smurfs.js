import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, postSmurfs } from '../actions';

const Smurfs = ({ getSmurfs, smurfs, postSmurfs}) => {
    const [ newSmurf, setSmurf ] = useState();

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

    const newSmurfObj = {
        name: newSmurf,
        age: 0,
        height: 0,
        id: 0
    }

    console.log(newSmurfObj)

    console.log(smurfs)

    const handleSubmit = e => {
        e.preventDefault();
        postSmurfs(newSmurfObj);
        setSmurf('');
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
            {smurfs.map(smurf => {
               return <p>{smurf.name}</p>
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(
    mapStateToProps,
    { getSmurfs, postSmurfs }
)(Smurfs);