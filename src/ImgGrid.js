import React, { Component } from 'react';
import Window from './Window';
import HomeComponent from './HomeComponent';
import './ImgGrid.css';

class ImgGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      url: '',
      title: ''
    };
  }

  updateInfoImg = (data) => {
    const { number, url, title } = data;
    this.setState({ number, url, title });
  }

  render() {
    const {
      window,
      images,
      updateStateWindow,
      onScroll,
      innerHeight,
      changeIsOpen,
      setOnload
    } = this.props;
    const {
      number,
      url,
      title
    } = this.state;

    if (window) {
      return (
        <Window
          images={images}
          window={window}
          updateStateWindow={updateStateWindow}
          number={number}
          url={url}
          title={title}
        />
      );
    }
    return (
      <HomeComponent
        setOnload={setOnload}
        innerHeight={innerHeight}
        updateInfoImg={this.updateInfoImg}
        images={images}
        window={window}
        updateStateWindow={updateStateWindow}
        onScroll={onScroll}
        changeIsOpen={changeIsOpen}
      />
    );
  }
}

export default ImgGrid;
