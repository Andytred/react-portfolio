import React, { Component } from 'react';
import Header from './Header';

class Jokes extends Component {
    state = { joke: {} };

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(json => this.setState({ joke: json }));
    }

    render() {
        const { setup, punchline } = this.state.joke;
        
        return (
            
            <div>
                <Header />
                <h2>Top jokes to start a day I fetched for you</h2>
                <p>{setup} <em>{punchline}</em></p>
            </div>
        )
    }

}

export default Jokes;