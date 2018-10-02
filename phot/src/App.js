import React, { Component } from 'react';
import axios from 'axios';

import ImgGrid from './ImgGrid.js';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { apiPrefix } from './etc/config.json';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      window: false
    };
  }

  updateStateWindow = (value) => {
    this.setState({ window: value })
  }

  componentWillMount() {
    axios.get(`${apiPrefix}/imges`).then(({data}) => {this.setState({data: data})});
  };

  render() {
    return (
      <div className="App">
        {this.state.window === true?null:<div className="LeftColumn center"><h1 className="center">Redevice</h1></div>}
        <div className="grid">
          <ImgGrid updateStateWindow={this.updateStateWindow} window={this.state.window} imges={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default App;
