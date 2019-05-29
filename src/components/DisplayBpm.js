import React from 'react';

const DisplayBpm = (props) => {
    return (
        <div>
            <h1>Metronome</h1>
            <h1>{props.bpm}</h1>
        </div>
    )
        
}
 
export default DisplayBpm;