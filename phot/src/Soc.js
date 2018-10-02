import React, {Component} from 'react';
import './Soc.css';

class Soc extends Component {

    render() {
        return (
            <a href={this.props.href} title={this.props.title}>
                <svg>{this.props.svg}</svg>
            </a>
        )
    }
}

export default Soc;

