import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    URL: ""
  }

  onInputChange = (e) => {
    this.setState({
      URL: e.target.value
    })
  }

  downloadHandler = () => {
    let url = { URL: this.state.URL }
    axios.post('http://localhost:5000/download/', url)
      .then(res => console.log(res))
      .catch((error) => { console.log(error); })
  }

  render() {
    return (
      <div className="App">
        <h1 className="heading">My Own Youtube Downloader !</h1>
        <input onChange={this.onInputChange} className="URL-input" placeholder="https://www.youtube.com/watch?v=MtN1YnoL46Q"></input>
        <button onClick={this.downloadHandler} className="convert-button">Convert</button>
      </div>
    );
  }
}

export default App;