import React, { useEffect } from 'react';
import Glide, { Options } from '@glidejs/glide';

import '@glidejs/glide/dist/css/glide.core.min.css';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { styled } from '../../../Styles/stitches.config';

const sliderConfiguration: Options = {
  gap: 0,
  perView: 3,
  startAt: 0,
  type: 'carousel',
  autoplay: 2000,
};

function Slider() {
  useEffect(() => {
    const slider = new Glide('.glide', sliderConfiguration);
    slider.mount();
  }, []);

  const DivSlider = styled('div', {
    width: '100%',
    position: 'relative',

    '& div.glide__arrows': {
      position: 'absolute',
      top: '40%',
      width: '100%',
      display: 'flex',
      padding: '0',
      justifyContent: 'space-between',
    },

    '& div.glide__arrows button': {
      padding: '0px',
      border: 'none',
      borderRadius: '5px',
      background: 'none',
      cursor: 'pointer',
      color: '$textSecondary',
      transition: '0.5s',

      '&:hover': {
        color: '$textPrimary',
      },
    },

    '& div.glide__arrows button.glide__arrow--prev': {
      position: 'absolute',
      left: '2px',
    },

    '& div.glide__arrows button.glide__arrow--next': {
      position: 'absolute',
      right: '2px',
    },
  });

  const BoxCard = styled('div', {
    position: 'relative',
    width: '400px',
    height: '450px',
    background: '#fff',
    boxShadow: '0 30px 30px rgba(0,0,0,.5)',
    cursor: 'pointer',
    marginBottom: '25px',

    '&:hover div.imgBox img': {
      opacity: '0',
    },

    '&:hover div.content': {
      width: '100%',
      height: '100%',
      bottom: '0',
      left: '0',
    },

    '&:hover div.content p': {
      opacity: '1',
      transitionDelay: '0.5s',
    },
  });

  const ImgBoxCard = styled('div', {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
  });

  const ImgCard = styled('img', {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: '0.5s',
    padding: '10px',
  });

  const ContentBox = styled('div', {
    position: 'absolute',
    bottom: '20px',
    left: '10%',
    width: '80%',
    height: '60px',
    background: '#fff',
    transition: '0.5s',
    overflow: 'hidden',
    padding: '15px',
    boxSizing: 'border-box',
    color: '$textSecondary',

    '& p': {
      margin: '10px 0 0',
      padding: '0',
      opacity: '0',
      lineHeight: '1.2em',
      transition: '0.5s',
      textAlign: 'justify',
      fontFamily: 'Poppins, sans-serif;',
    },
  });

  return (
    <DivSlider data-aos="fade-right">
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides" style={{ padding: '40px 0px' }}>
            <li className="glide__slide">
              <BoxCard>
                <ImgBoxCard className="imgBox">
                  <ImgCard
                    src="https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg"
                    alt="uops"
                  />
                </ImgBoxCard>

                <ContentBox className="content">
                  <h3>Hello world!</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum fringilla leo nec ipsum auctor sodales. Integer
                    dictum porta tincidunt. Etiam a ipsum ipsum. Nullam et
                    fringilla quam. In et mauris ipsum. Quisque dictum ipsum
                    nulla. Cras eu ex eget nisl tempus aliquet. Nullam eget
                    suscipit sem.
                  </p>
                </ContentBox>
              </BoxCard>
            </li>
            <li className="glide__slide">
              <BoxCard>
                <ImgBoxCard className="imgBox">
                  <ImgCard
                    src="https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg"
                    alt="uops"
                  />
                </ImgBoxCard>

                <ContentBox className="content">
                  <h3>Hello world!</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum fringilla leo nec ipsum auctor sodales. Integer
                    dictum porta tincidunt. Etiam a ipsum ipsum. Nullam et
                    fringilla quam. In et mauris ipsum. Quisque dictum ipsum
                    nulla. Cras eu ex eget nisl tempus aliquet. Nullam eget
                    suscipit sem.
                  </p>
                </ContentBox>
              </BoxCard>
            </li>
            <li className="glide__slide">
              <BoxCard>
                <ImgBoxCard className="imgBox">
                  <ImgCard
                    src="https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg"
                    alt="uops"
                  />
                </ImgBoxCard>

                <ContentBox className="content">
                  <h3>Hello world!</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum fringilla leo nec ipsum auctor sodales. Integer
                    dictum porta tincidunt. Etiam a ipsum ipsum. Nullam et
                    fringilla quam. In et mauris ipsum. Quisque dictum ipsum
                    nulla. Cras eu ex eget nisl tempus aliquet. Nullam eget
                    suscipit sem.
                  </p>
                </ContentBox>
              </BoxCard>
            </li>
            <li className="glide__slide">
              <BoxCard>
                <ImgBoxCard className="imgBox">
                  <ImgCard
                    src="https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg"
                    alt="uops"
                  />
                </ImgBoxCard>

                <ContentBox className="content">
                  <h3>Hello world!</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum fringilla leo nec ipsum auctor sodales. Integer
                    dictum porta tincidunt. Etiam a ipsum ipsum. Nullam et
                    fringilla quam. In et mauris ipsum. Quisque dictum ipsum
                    nulla. Cras eu ex eget nisl tempus aliquet. Nullam eget
                    suscipit sem.
                  </p>
                </ContentBox>
              </BoxCard>
            </li>
          </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--prev"
            data-glide-dir="<"
            type="button"
          >
            <AiOutlineLeft size={60} />
          </button>

          <button
            className="glide__arrow glide__arrow--next"
            data-glide-dir=">"
            type="button"
          >
            <AiOutlineRight size={60} />
          </button>
        </div>
      </div>
    </DivSlider>
  );
}

export default Slider;
