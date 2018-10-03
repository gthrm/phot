import React, { Component } from 'react';
import axios from 'axios';

import ImgGrid from './ImgGrid.js';
import Soc from './Soc.js';

import svg from './svg.js';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { apiPrefix } from './etc/config.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      window: false,
      imgOnload: false,
      count: 1
    };
  }

  updateStateWindow = (value) => {
    this.setState({ window: value })
  }

  counterImg = () => {
    this.setState({count: this.state.count+1});
    this.state.count === this.state.data.length ? this.setState({imgOnload: true}):console.log('counterImg ', 'count: ', this.state.count);
  }

  componentWillMount() {
    axios.get(`${apiPrefix}/imges`).then(({data}) => {this.setState({data: data.reverse()})});
  };

  render() {

    return (
      <div className="App">
        {this.state.window === true?
          null
          :
          <div className="LeftColumn center">
            <h1 className="center">Redevice</h1>
            <ul className="ul-soc">
              <Soc href="https://vk.com/romanra" title="vk.com" svg={svg.vk} />
              <Soc href="https://www.instagram.com/redevice/" title="instagram" svg={svg.inst} />
            </ul>
          </div>}
        <div className="grid" onLoad={()=>this.counterImg()}>
          <ImgGrid imgOnload={this.state.imgOnload} updateStateWindow={this.updateStateWindow} window={this.state.window} imges={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default App;
