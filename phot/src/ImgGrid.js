import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

import './ImgGrid.css';

import Img from './Img.js';

class ImgGrid extends Component {

    render() {
        
        const masonryOptions = {
            itemSelector: '.img',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        };
        return (
            <Masonry
                className='ImgGrid'
                options={masonryOptions}
            >
                {
                    this.props.imges.map(img =>
                        <Img
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