import React, { Component } from 'react';
import ImgGrid from './ImgGrid.js';
import axios from 'axios';
import './App.css';
import { apiPrefix } from './etc/config.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentWillMount() {
    axios.get(`${apiPrefix}/imges`).then(({data}) => {this.setState({data: data})});
  };

  render() {
    return (
      <div className="App">
        <div className="LeftColumn"></div>
        <ImgGrid imges={this.state.data}/>
      </div>
    );
  }
}

export default App;
