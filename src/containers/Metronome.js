import React, { Component } from 'react';
import Slider from "../components/Slider";
import PlayButton from "../components/PlayButton";
import StopButton from "../components/StopButton";
import DisplayBpm from "../components/DisplayBpm";
import sound1 from "../audio/sound81.wav";
import sound2 from "../audio/Korg-N1R-Metronome-Click.wav";
import CountDisplay from "../components/CountDisplay";

class Metronome extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bpm: 100,
            beatCount: 0
         }
         this.updateDisplay = this.updateDisplay.bind(this);
         this.playSound = this.playSound.bind(this);
         this.findInterval = this.findInterval.bind(this);
         this.somethinf = this.somethinf.bind(this);
         this.displayCount = this.displayCount.bind(this);
         this.beatCount = this.beatCount.bind(this);
    }

    updateDisplay(num) {
        this.setState(
            {bpm: num}
        )
    }

    somethinf() {
        const beat1 = new Audio(sound1);
        const beat2 = new Audio(sound2);

        for (let index = 1; index <= 4; index++) {
            if (this.state.beatCount === 4) {
                beat2.play()
            } else {
                beat1.play()
            }   
        }
    }

    playSound() {
        window.setInterval(this.somethinf, this.findInterval());
        this.displayCount();
    }

    displayCount() {
        window.setInterval(this.beatCount, this.findInterval());
    }

    findInterval() {
        return 60000 / this.state.bpm;
    }

    beatCount() {
       if (this.state.beatCount < 4) {
           this.setState(
               {beatCount: this.state.beatCount + 1} 
               )
            } else {
               this.setState(
                   {beatCount: 1}
               )
           }
           return this.state.beatCount;
       } 

    render() { 
        return ( 
            <div>
                <DisplayBpm bpm={this.state.bpm} />
                <Slider updateDisplay={this.updateDisplay}/>
                <CountDisplay count={this.state.beatCount}/>
                <PlayButton play={this.playSound} />
                <StopButton />
            </div>
            
         );
    }
}
 
export default Metronome;