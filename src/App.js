import React, { Component } from 'react';
import ImgGrid from './ImgGrid';
import Soc from './Soc';
import svg from './svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from './api/index';
import LoadingScreen from './LoadingScreen';

// eslint-disable-next-line no-undef
const { innerHeight } = window;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: undefined,
      window: false,
      count: 1,
      isLoad: false,
      imagesAreReady: false
    };
    this.pages = 0;
    this.imageCounter = 0;
  }

  componentDidMount() {
    this.loadContent();
  }

  updateStateWindow = (value) => {
    this.setState({ window: value });
  }

  counterImg = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  changeIsOpen = () => {
    const { isDonateOpen } = this.state;
    this.setState({ isDonateOpen: !isDonateOpen });
  }

  onScrollList = (event) => {
    const { isLoad } = this.state;
    if (event.target.scrollHeight - event.target.scrollTop <= event.target.offsetHeight + 400) {
      if (!isLoad) {
        this.setState({ isLoad: true });
        this.loadContent();
      }
    } else {
      this.setState({ isLoad: false });
    }
  }

  loadContent = () => {
    api.listImg(this.pages)
      .then(
        ({ data }) => {
          this.pages += 1;
          this.setState(
            (prevState) => ({
              images: prevState.images
                ? [...prevState.images, ...data.reverse()]
                : data.reverse()
            })
          );
        }
      )
      .catch(
        (err) => {
          console.log(err);
        }
      );
  }

  setOnload = () => {
    const { images = [] } = this.state;
    this.imageCounter += 1;
    if (this.imageCounter === images.length - 1) {
      this.setState({ imagesAreReady: true });
    }
  }

  render() {
    const {
      isDonateOpen,
      window,
      images,
      imagesAreReady
    } = this.state;
    return (
      <div
        className="App"
      >
        {
          !imagesAreReady ? <LoadingScreen /> : null
        }
        <div className="App-container" style={{ gridTemplateColumns: '0.2fr 1fr' }}>
          <div className="LeftColumn center">
            <h1 className="title center">Redevice</h1>
            <ul className="ul-soc">
              <Soc
                href="https://vk.com/romanra"
                title="vk.com"
                svg={svg.vk}
              />
              <Soc
                href="https://www.instagram.com/redevice/"
                title="instagram"
                svg={svg.inst}
              />
              <Soc
                href={null}
                title="donate"
                svg={svg.money}
                changeIsOpen={this.changeIsOpen}
              />
            </ul>
          </div>
          {isDonateOpen
            ? (
              <div className="grid">
                <div style={{
                  flex: 1, display: 'flex', justifyContent: 'flex-end', padding: 10
                }}
                >
                  <Soc
                    href={null}
                    title="closed"
                    svg={svg.closed}
                    changeIsOpen={this.changeIsOpen}
                  />
                </div>
                <iframe
                  title="Yandex.Money donate"
                  src="https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=%D0%9D%D0%B0%20%D1%81%D0%BE%D0%B2%D0%B5%D1%80%D1%88%D0%B5%D0%BD%D1%81%D1%82%D0%B2%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BD%D0%B0%D0%B2%D1%8B%D0%BA%D0%BE%D0%B2&targets-hint=&default-sum=100&button-text=11&payment-type-choice=on&mobile-payment-type-choice=on&hint=&successURL=https%3A%2F%2Fwww.myjpg.ru%2F&quickpay=shop&account=410013477761450"
                  width="100%"
                  height="222"
                  frameBorder="0"
                  allowTransparency="true"
                  scrolling="no"
                />
              </div>
            )
            : (
              <div className="grid" onLoad={() => this.counterImg()}>
                <ImgGrid
                  setOnload={this.setOnload}
                  innerHeight={innerHeight}
                  changeIsOpen={this.changeIsOpen}
                  onScroll={this.onScrollList}
                  updateStateWindow={this.updateStateWindow}
                  window={window}
                  images={images}
                />
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default App;
