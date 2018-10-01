import React, {Component} from 'react';
import './Img.css';

class Img extends Component {

    constructor(props) {
        super(props);
        this.state = {
          url: this.props.url,
          title: this.props.title
        };
    }

    handeClick() {
        let data = {url: this.state.url, title:this.state.title}
        this.props.updateInfoImg(data);
        this.props.updateStateWindow(!this.props.window);
    }

    render() {
        return (
            <img onClick={()=>this.handeClick()} className="img" src={this.props.url} alt={this.props.title}></img>
        )
    }
}

export default Img;
