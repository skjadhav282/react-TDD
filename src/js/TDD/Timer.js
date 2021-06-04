import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           
        };
    };

    componentDidMount() {
    };

    
    render() {
        return (
            <div className="Timer_container">
                <div className="box_container">
                    <div className="displayTimer"> </div>
                </div>
                <div className="button_container">
                      <button className="start_button" onClick={this.onClickButton.bind(this)}>Start</button>
                        <button className="stop_button" onClick={this.onClickButton.bind(this)}>Stop</button>
                        <button className="reset_button" onClick={this.onClickButton.bind(this)}>Reset</button>
                </div>
                
            </div>
        )
    };
}

export default Timer;