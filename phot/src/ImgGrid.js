import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

import Window from './Window.js';
import Img from './Img.js';
import LoadingScreen from './LoadingScreen.js'

import './ImgGrid.css';

class ImgGrid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: '',
            url: '',
            title: '',
            upVisible: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', () => this.upVisibleUpdate());
        window.addEventListener('touchend', () => this.upVisibleUpdate());
    }

    upVisibleUpdate() {
        document.documentElement.scrollTop === 0 ? this.setState({upVisible: false}) : this.setState({upVisible: true});
    }

    updateInfoImg = (data) => {
        this.setState({number: data.number, url: data.url, title: data.title});
    }

    handeClickUp() {
        for (let i = document.documentElement.scrollTop; i !== 0; --i) {
            setTimeout(() => {
                document.documentElement.scrollTop = i-1;                
            }, 30);
        }
    }  

    render() {

        const masonryOptions = {
            itemSelector: '.img',
            columnWidth: 100,
            gutter: 1,
            isFitWidth: true,
            percentPosition: true,
            transitionDuration: 0,
            stagger: 0
        };

        return (
            <div>
                {this.state.upVisible === false ? null : <span className="left control user-select-none fixed mob" onClick={()=>this.handeClickUp()}>Up</span>}

                {
                    this.props.imgOnload === false ? <LoadingScreen /> : null
                }
                {
                    this.props.window?
                    <Window
                        imges={this.props.imges}
                        window={this.props.window}
                        updateStateWindow={this.props.updateStateWindow}
                        number={this.state.number}
                        url={this.state.url}
                        title={this.state.title}
                    />
                    :
                    

                    <Masonry
                        
                        className='ImgGrid'
                        options={masonryOptions}
                    >
                        {
                            this.props.imges.map(img =>
                                <Img
                                    updateInfoImg={this.updateInfoImg}
                                    updateStateWindow={this.props.updateStateWindow}
                                    window={this.props.window}
                                    key={img._id}
                                    number={img.number}
                                    url={img.url}
                                    title={img.title}
                                >
                                </Img>
                            )
                        }
                    </Masonry>
                
                }
            </div>
        );
    }
}

export default ImgGrid;