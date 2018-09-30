import React, { Component } from 'react';
import ImgGrid from './ImgGrid.js';
import axios from 'axios';
import './App.css';
import { apiPrefix } from './etc/config.json';

class App extends Component {

  loadImg() {
    return axios.get(`${apiPrefix}/imges`);
  };

  render() {
    return (
      <div className="App">
        <div className="LeftColumn"></div>
        <ImgGrid imges={this.loadImg}/>
      </div>
    );
  }
}

export default App;
