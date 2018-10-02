import React, {Component} from 'react';
import './Soc.css';

class Soc extends Component {

    render() {
        return (
            <li className="li-soc">
                <a href={this.props.href} title={this.props.title} target="_blank">
                    <i className={this.props.svg}></i>
                </a>
            </li>
        )
    }
}

export default Soc;

