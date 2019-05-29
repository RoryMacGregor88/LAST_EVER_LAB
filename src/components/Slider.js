import React from 'react';


const Slider = (props) => {

    function handleChange(evt) {
        props.updateDisplay(evt.target.value)
    }

    return (
        <div>
            <input
                type="range" id="start" min="1" max="300" step="1" onChange={handleChange}>
            </input>
        </div>
        
    )
} 
 
export default Slider;