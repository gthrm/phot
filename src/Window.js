import React, { Component } from 'react';
import './Window.css';

class Window extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.number,
      url: props.url,
      title: props.title
    };
    this.number = 0;
  }

  handeClick = () => {
    const { updateStateWindow, window } = this.props;
    updateStateWindow(!window);
  }

  handeClickNext = () => {
    const { images } = this.props;
    const lengthArr = images.length;

    const nextNumber = this.number;
    this.number += 1;
    nextNumber === lengthArr
      ? this.number = 0
      && this.setState({
        number: images[0].number,
        url: images[0].url,
        title: images[0].title
      })
      : this.setState({
        number: images[nextNumber].number,
        url: images[nextNumber].url,
        title: images[nextNumber].title
      });
  }

  render() {
    const {
      url,
      title,
      number
    } = this.state;
    return (
      <div className="window">
        <span
          className="close"
          onClick={this.handeClick}
        >
          Close
        </span>
        <img
          onClick={this.handeClickNext}
          className="img-big"
          src={url}
          alt={title}
          number={number}
        />
      </div>
    );
  }
}

export default Window;
