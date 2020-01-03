import React, { Component } from 'react';
import './Soc.css';

class Soc extends Component {
  openItem = () => {
    const { href, title, changeIsOpen } = this.props;
    if (!href) {
      if (title === 'donate' || title === 'closed') {
        changeIsOpen();
      }
    }
  }

  render() {
    const { href, title, svg } = this.props;
    const target = '_blank';
    return (
      <li className="li-soc" onClick={this.openItem}>
        <a href={href} title={title} target={target}>
          <i className={svg} />
        </a>
      </li>
    );
  }
}


export default Soc;
