import React from 'react';
import Masonry from 'react-masonry-component';
import Img from './Img';
import Soc from './Soc';
import svg from './svg';
import './ImgGrid.css';

const masonryOptions = {
  itemSelector: '.img',
  columnWidth: 120,
  gutter: 1,
  isFitWidth: true,
  percentPosition: true,
  transitionDuration: 0,
  stagger: 0
};

function HomeComponent(props) {
  const {
    onScroll,
    window,
    changeIsOpen,
    images = [],
    updateStateWindow,
    updateInfoImg,
    innerHeight,
    setOnload
  } = props;

  return (
    <div
      className="touch"
      style={{
        height: innerHeight,
        overflowY: 'scroll',
        paddingTop: 15,
        paddingBottom: 15
      }}
      onScroll={onScroll}
    >
      <div className="name-grid" style={{ paddingBottom: 15 }}>
        <h1 className="center">Redevice</h1>
        <ul className="ul-soc">
          <Soc href="https://vk.com/romanra" title="vk.com" svg={svg.vk} />
          <Soc href="https://www.instagram.com/redevice/" title="instagram" svg={svg.inst} />
          <Soc href={null} title="donate" svg={svg.money} changeIsOpen={changeIsOpen} />

        </ul>
      </div>
      <Masonry
        className="masonry"
        options={masonryOptions}
      >
        {
          images
            ? images.map(
              (img) => (
                <Img
                  setOnload={setOnload}
                  updateInfoImg={updateInfoImg}
                  updateStateWindow={updateStateWindow}
                  window={window}
                  key={img._id}
                  number={img.number}
                  url={img.url}
                  title={img.title}
                />
              )
            )
            : null
        }
      </Masonry>

    </div>
  );
}

export default HomeComponent;
