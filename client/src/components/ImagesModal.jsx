import React from 'react';

const ImagesModal = ({
  handleClose,
  show,
  photos,
  leftArrowClick,
  rightArrowClick,
  selectedSlide,
}) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <section className="exp-carousel" aria-label="Gallery">
          <ol className="carousel__viewport">
            {photos.map((photo, i) => (
              <li
                onClick={() => console.log('clicked image')}
                key={i}
                id={`carousel__slide${i + 1}`}
                tabIndex="0"
                style={{ backgroundImage: `URL(${photos[i].url})` }}
                className="exp-carousel__slide"
              >
                {selectedSlide > 1 ? (
                  <div className="carousel_snapper">
                    <a
                      onClick={leftArrowClick}
                      href={
                        i > 0
                          ? `#carousel__slide${i}`
                          : `#carousel__slide${i + 1}`
                      }
                      className="carousel__prev"
                    >
                      Go to last slide
                    </a>
                  </div>
                ) : null}
                {selectedSlide < photos.length ? (
                  <div className="carousel_snapper">
                    <a
                      onClick={rightArrowClick}
                      href={`#carousel__slide${i + 2}`}
                      className="carousel__next"
                    >
                      Go to next slide
                    </a>
                  </div>
                ) : null}
              </li>
            ))}
          </ol>
        </section>
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default ImagesModal;
