import React, {Component} from 'react';
import './Soc.css';

class Soc extends Component {

    render() {
        return (
            <li className="li-soc" onClick={this.openItem}>
                <a href={this.props.href} title={this.props.title} target="_blank">
                    <i className={this.props.svg}></i>
                </a>
            </li>
        )
    }
    openItem = () => {
        if(this.props.href === null) {
            if(this.props.title === "donate" || this.props.title === "closed") {
                this.props.changeIsOpen()
            }
        }
    }
}



export default Soc;

