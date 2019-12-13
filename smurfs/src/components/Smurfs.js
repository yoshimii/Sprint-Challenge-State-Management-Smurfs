import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, postSmurfs } from '../actions';
import Smurfy from '../components/Smurfy';

const Smurfs = ({ getSmurfs, smurfy, postSmurfs}) => {
    const [ newSmurf, setSmurf ] = useState('');

    console.log(smurfy);

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
        age: 10,
        height: '120cm',
    }

    const handleSubmit = e => {
        e.preventDefault();
        postSmurfs(newSmurfObj);
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
            {smurfy.map(item => {
               return <Smurfy item={item}/>
            })}
        </div>
    )
}

const mapStateToProps = state => {
    console.log('from connect function',state)
    return {
        smurfy: state.smurfs
    }
}

export default connect(
    mapStateToProps,
    { getSmurfs, postSmurfs }
)(Smurfs);