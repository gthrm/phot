import React, {Component} from 'react';
import './Window.css';

class Window extends Component {

    handeClick() {
        this.props.updateStateWindow(!this.props.window);
    }

    render() {
        return (
            <div className="window">
                <span className="close" onClick={()=>this.handeClick()}>Close</span>
                <img onClick={()=>this.handeClick()} className="img-big" src={this.props.url} alt={this.props.title}></img>
            </div>
        )
    }
}

export default Window;
