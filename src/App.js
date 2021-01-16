import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Projects from './Projects';

class App extends Component {
  constructor() {
    super();
    this.state = { displayBio: false };
    this.readMore = this.readMore.bind(this);
    this.showLess = this.showLess.bind(this);
  }

  

  readMore () {
    // this.state.displayBio = true;
    this.setState ({ displayBio: true });
  }

  showLess () {
    this.setState ({ displayBio: false });
  }

  render() {
    // if (!this.state.displayBio) {
    //   bio = null;
    // }

    return (
      <div>
        <h1>Hello</h1>
        <p>My name is Andrea, I'm a service designer and Junior front-end developer</p>
        {
         this.state.displayBio ? (
        <div>
          <p>I live in Barcelona, and code every day.</p>
          <p>My favorite language is JS, and learning React.js</p>
          <p>Besides coding, I also have a passion for service design and implementing service desing thinking</p>
          <button onClick={this.showLess}>Show less</button>
        </div>
      ) : (
        <div>
          <button onClick={this.readMore}>Read more</button>
        </div>
      )
        }
        <hr />
        <Projects />
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

export default App;
