import React from 'react'
import { useState } from 'react';
import PropBox from "./PropBox";
import Cool from "./Cool";

class Counter extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            children: [],
            bgColor: [
                'red',
                'blue',
                'yellow',
            ],
            selectedColor: 'red',
            loop: false
        }
            this.increment = () => this.setState({counter: this.state.counter + 1});
            this.appendChild = () => this.setState({children: this.state.children.concat(<PropBox bgColor={this.state.selectedColor} />)});



    }

    _getRandomColor(){
        var item = this.state.bgColor[Math.floor(Math.random()*this.state.bgColor.length)];
        this.setState({
            selectedColor: item,
            loop: true
        })
    }

    _setFalse(){
        this.setState(this.state.loop = false)

    }

    componentDidUpdate(prevState){
        if(this.state.counter % 5 == 0 && this.state.loop == false){
            this._getRandomColor()

        }
    }

    refreshPage() {
        window.location.reload(false);
    }


    render() {
        return (
            <div>
                <button onClick={this.refreshPage}>Click to reload!</button>
                <button onClick={() =>{
                    this.appendChild();
                    this.increment();
                    this.state.loop = false;
                }}>Increment</button>
                <div className="counter">
                    <h1>Counter {this.state.counter}</h1>
                    <h1>{this.state.children.map(child => child)}</h1>


                </div>
            </div>

        );
    }
}

export default Counter;
