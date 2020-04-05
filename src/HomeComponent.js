import React from 'react';
import BottomScrollListener from 'react-bottom-scroll-listener';
import Img from './Img';

function HomeComponent(props) {
  const {
    images = [],
    onScroll
  } = props;
  return (
    <BottomScrollListener
      offset={500}
      onBottom={onScroll}
    >
      <div
        style={{
          paddingTop: 15,
          paddingBottom: 15
        }}
      >
        {
          images && images.map(
            (img) => (
              <Img
                key={img._id}
                url={img.url}
                title={img.title}
              />
            )
          )
        }

      </div>
    </BottomScrollListener>
  );
}

export default HomeComponent;
