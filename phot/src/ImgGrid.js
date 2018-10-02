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
            title: ''
        };
    }

    updateInfoImg = (data) => {
        this.setState({number: data.number, url: data.url, title: data.title});
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
            
            this.props.imges.length === 0 ? <LoadingScreen /> :
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
        );
    }
}

export default ImgGrid;