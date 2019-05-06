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
      count: 1,
      isLoad: true
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
        <div className="App-container" style={{ gridTemplateColumns: "0.2fr 1fr" }}>
          <div className="LeftColumn center">
            <h1 className="title center">Redevice</h1>
            <ul className="ul-soc">
              <Soc href="https://vk.com/romanra" title="vk.com" svg={svg.vk} />
              <Soc href="https://www.instagram.com/redevice/" title="instagram" svg={svg.inst} />
              <Soc href={null} title="donate" svg={svg.money} changeIsOpen={this.changeIsOpen.bind(this)} />
            </ul>
          </div>
          {this.state.isDonateOpen ?
            <div className="grid">
              <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", padding: 10 }}>
                <Soc href={null} title="closed" svg={svg.closed} changeIsOpen={this.changeIsOpen.bind(this)} />
              </div>
              <iframe title="Yandex.Money donate" src="https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=%D0%9D%D0%B0%20%D1%81%D0%BE%D0%B2%D0%B5%D1%80%D1%88%D0%B5%D0%BD%D1%81%D1%82%D0%B2%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BD%D0%B0%D0%B2%D1%8B%D0%BA%D0%BE%D0%B2&targets-hint=&default-sum=100&button-text=11&payment-type-choice=on&mobile-payment-type-choice=on&hint=&successURL=https%3A%2F%2Fwww.myjpg.ru%2F&quickpay=shop&account=410013477761450" width="100%" height="222" frameborder="0" allowtransparency="true" scrolling="no"></iframe>
            </div>
            :
            <div className="grid" onLoad={() => this.counterImg()}>
              <ImgGrid changeIsOpen={this.changeIsOpen.bind(this)} onScroll={this.onScrollList.bind(this)} imgOnload={this.state.imgOnload} updateStateWindow={this.updateStateWindow} window={this.state.window} imges={this.state.data} />
            </div>}
        </div>
      </div>
    );
  }

  changeIsOpen = () => {
    this.setState({ isDonateOpen: !this.state.isDonateOpen })
  }

  onScrollList = (event) => {
    // console.log('====================================')
    // console.log(event.target.scrollTop +
    //     event.target.offsetHeight, event.target.scrollHeight, event.target.scrollTop + event.target.offsetHeight === event.target.scrollHeight/2)
    // console.log('====================================')
    // console.log(event.target.scrollTop + event.target.offsetHeight, event.target.scrollHeight - 300);
    // console.log((event.target.scrollTop + event.target.offsetHeight) > (event.target.scrollHeight - 300));


    // const scrollBottom = ;

    if ((event.target.scrollTop + event.target.offsetHeight) > (event.target.scrollHeight - event.target.offsetHeight/2)) {
      if (this.state.isLoad) {
        this.loadContent();
      }   //API method
      this.setState({ isLoad: false })
    } if ((event.target.scrollTop + event.target.offsetHeight) < (event.target.scrollHeight - event.target.offsetHeight/2)) {
      this.setState({ isLoad: true })
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
