import React from 'react';
import heroImg from '../../assets/images/illustration-hero.svg';

export const Hero = () => {
  return (
    <>
      <section className="hero container">
        <div className="row" style={{ flexDirection: 'row-reverse' }}>
          <div className="col-md-6 col-sm-12 heroImg">
            <img src={heroImg} alt="heroImg" />
          </div>

          <div className="col-md-6 col-sm-12">
            <h1>A Simple Bookmark Manager</h1>
            <p>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>

            <div>
              <button>Get it on Chrome</button>
              <button>Get it on Firefox</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
