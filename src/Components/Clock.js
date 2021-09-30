import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    tick() {
        this.setState({ date: new Date() });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div className="text-center m-5 fixed-bottom">
                <button className="btn btn-lg btn-info">{this.state.date.toLocaleTimeString()}</button>
            </div>
        )
    }
}

export default Clock;