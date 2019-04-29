import React, { Component } from 'react';

import ImgGrid from './ImgGrid.js';
import Soc from './Soc.js';

import svg from './svg.js';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from './api/index.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      window: false,
      imgOnload: false,
      count: 1
    };
    this.pages = 0
  }

  updateStateWindow = (value) => {
    this.setState({ window: value })
  }

  counterImg = () => {
    this.setState({ count: this.state.count + 1 });
    this.state.count === this.state.data.length ? this.setState({ imgOnload: true }) : console.log('counterImg ', 'count: ', this.state.count);
  }

  componentWillMount() {
    // axios.get(`${apiPrefix}/imges`).then(({data}) => {this.setState({data: data.reverse()})});
    api.listImg()
      .then(
        images => {
          this.setState({ data: images.data.reverse() })
        }
      )
  };

  render() {

    return (
      <div className="App">
        <div className="App-container" style={{gridTemplateColumns: "0.2fr 1fr"}}>
          <div className="LeftColumn center">
            <h1 className="title center">Redevice</h1>
            <ul className="ul-soc">
              <Soc href="https://vk.com/romanra" title="vk.com" svg={svg.vk} />
              <Soc href="https://www.instagram.com/redevice/" title="instagram" svg={svg.inst} />
            </ul>
          </div>
          <div className="grid" onLoad={() => this.counterImg()}>
            <ImgGrid onScroll={this.onScrollList.bind(this)} imgOnload={this.state.imgOnload} updateStateWindow={this.updateStateWindow} window={this.state.window} imges={this.state.data} />
          </div>
        </div>
      </div>
    );
  }

  onScrollList = (event) => {
    // console.log('====================================')
    // console.log(event.target.scrollTop +
    //     event.target.offsetHeight, event.target.scrollHeight)
    // console.log('====================================')
    const scrollBottom = event.target.scrollTop +
      event.target.offsetHeight === event.target.scrollHeight;

    if (scrollBottom) {
      this.loadContent(); //API method
    }
  }

  loadContent = () => {

    this.pages = this.pages + 1;
    // console.log('====================================')
    // console.log('this.pages: ', this.pages)
    // console.log('====================================')
    api.listImg(this.pages)
      .then(
        images => {

          let imagesData = this.state.data;
          for (let i = 0; i < images.data.length; i++) {
            imagesData.push(images.data[i])
          }

          // console.log('====================================')
          // console.log(imagesData)
          // console.log('====================================')
          this.setState({ data: imagesData })
        }
      )
      .catch(
        err => {
          console.log('====================================')
          console.log(err)
          console.log('====================================')
        }
      )
  }
}

export default App;
