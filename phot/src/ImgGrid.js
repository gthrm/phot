import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

import Window from './Window.js';
import Img from './Img.js';
import LoadingScreen from './LoadingScreen.js';
import Soc from './Soc.js';
import svg from './svg.js';

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
        this.setState({ number: data.number, url: data.url, title: data.title });
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
                {
                    this.props.imgOnload === false ? <LoadingScreen /> : null
                }
                {
                    this.props.window ?
                        <Window
                            imges={this.props.imges}
                            window={this.props.window}
                            updateStateWindow={this.props.updateStateWindow}
                            number={this.state.number}
                            url={this.state.url}
                            title={this.state.title}
                        />
                        :
                        <div
                            className="touch"
                            style={{ height: window.innerHeight, overflowY: 'scroll', paddingTop: 15, paddingBottom: 15 }}
                            onScroll={(event) => this.props.onScroll(event)}
                        >
                            <div className="name-grid" style={{paddingBottom: 15}}>
                                <h1 className="center">Redevice</h1>
                                <ul className="ul-soc">
                                    <Soc href="https://vk.com/romanra" title="vk.com" svg={svg.vk} />
                                    <Soc href="https://www.instagram.com/redevice/" title="instagram" svg={svg.inst} />
                                    <Soc href={null} title="donate" svg={svg.money} changeIsOpen={this.props.changeIsOpen} />

                                </ul>
                            </div>
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

                        </div>
                }
            </div>
        );
    }
}

export default ImgGrid;