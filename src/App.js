import React, { Component } from 'react';
import HomeComponent from './HomeComponent';
import api from './api/index';
import LoadingScreen from './LoadingScreen';
import './reset.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: undefined
    };
    this.pages = 0;
    this.imageCounter = 0;
  }

  componentDidMount() {
    this.loadContent();
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

  render() {
    const {
      images,
    } = this.state;
    if (!images) return <LoadingScreen />;
    return (
      <HomeComponent
        onScroll={this.loadContent}
        images={images}
      />
    );
  }
}

export default App;
