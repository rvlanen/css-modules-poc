import React, { Component } from 'react';
import { Parent } from './features/parent';

class App extends Component {
    state = {
        showChild: false,
    };

    onClick = () => {
        this.setState(state => {
            return { showChild: !state.showChild };
        });
    };

    render() {
        return (
            <div>
                <Parent showChild={this.state.showChild} />
                <button onClick={this.onClick}>Toggle Child</button>
            </div>
        );
    }
}

export default App;
