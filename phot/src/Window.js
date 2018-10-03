import React, {Component} from 'react';
import './Window.css';

class Window extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: this.props.number,
            url: this.props.url,
            title: this.props.title
        };
      }

    handeClick() {
        this.props.updateStateWindow(!this.props.window);
    }

    handeClickNext() {
        const lengthArr = this.props.imges.length;
        const number = this.state.number;
        const nextNumber = lengthArr-number;

        nextNumber === lengthArr ?
        this.setState({
            number: this.props.imges[0].number,
            url: this.props.imges[0].url,
            title: this.props.imges[0].title
        })
        :
        this.setState({
            number: this.props.imges[nextNumber].number,
            url: this.props.imges[nextNumber].url,
            title: this.props.imges[nextNumber].title
        })
    }

    handeClickBack() {
        const lengthArr = this.props.imges.length;
        const number = this.state.number;
        const backNumber = lengthArr-number-1-1;
        
        backNumber === -1 ?
        this.setState({
            number: this.props.imges[lengthArr-1].number,
            url: this.props.imges[lengthArr-1].url,
            title: this.props.imges[lengthArr-1].title
        })
        :
        this.setState({
            number: this.props.imges[backNumber].number,
            url: this.props.imges[backNumber].url,
            title: this.props.imges[backNumber].title
        })
    }

    render() {
        return (
            <div className="window">
                <span className="back user-select-none" onClick={()=>this.handeClickBack()}>Back</span>
                <span className="close user-select-none" onClick={()=>this.handeClick()}>Close</span>
                <img onClick={()=>this.handeClickNext()} className="img-big" src={this.state.url} alt={this.state.title}></img>
            </div>
        )
    }
}

export default Window;
