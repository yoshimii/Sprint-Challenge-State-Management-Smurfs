import React from 'react';

const Smurfy = (props) => {

    return (
        <div>
            <p>rendering</p>
            <p>{props.item.name}</p>
            <p>{props.item.age}</p>
            <p>{props.item.height}</p>
        </div>
    )

}

export default Smurfy;