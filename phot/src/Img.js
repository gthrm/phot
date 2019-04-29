import React, {Component} from 'react';
import './Img.css';

class Img extends Component {

    handeClick() {
        let data = {url: this.props.url, title:this.props.title, number: this.props.number}
        this.props.updateInfoImg(data);
        this.props.updateStateWindow(!this.props.window);
    }

    render() {

        return (
            <div className="imagecontainer">
                <img onClick={()=>this.handeClick()} className="img" src={this.props.url} alt={this.props.title}></img>
            </div>
        )
    }
}

export default Img;
