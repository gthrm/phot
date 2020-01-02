import React, { Component } from 'react';
import './Img.css';

class Img extends Component {
  handeClick = () => {
    const {
      url,
      title,
      number,
      window,
      updateInfoImg,
      updateStateWindow
    } = this.props;
    const data = { url, title, number };
    updateInfoImg(data);
    updateStateWindow(!window);
  }

  render() {
    const { url, title, setOnload } = this.props;
    return (
      <div className="imagecontainer">
        <img
          onLoad={setOnload}
          loading="lazy"
          onClick={this.handeClick}
          className="img"
          src={url}
          alt={title}
        />
      </div>
    );
  }
}

export default Img;
