import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, postSmurfs } from '../actions';

const Smurfs = ({ getSmurfs, smurfs, postSmurfs}) => {
    const [ newSmurf, setSmurf ] = useState(smurfs.name);

    useEffect(() => {
        getSmurfs();
    }, [getSmurfs]);
    
    const handleChanges = e => {
        e.preventDefault();
        setSmurf(e.target.value);
        console.log(newSmurf)
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
        postSmurfs({newSmurfObj});
        console.log(newSmurfObj)
        setSmurf('');
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