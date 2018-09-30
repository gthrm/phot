import React, {Component} from 'react';
import './Img.css';

class Img extends Component {
    render() {
        return (
            <img src={this.props.url} alt={this.props.title}></img>
        )
    }
}

export default Img;
