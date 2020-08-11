import React from 'react';
import './spash.css';

class Splash extends React.Component {
  render() {
    return (
      <div className="splash-page">
        <div className="about-block">
          <div className="about-right">
            <div className="About">About</div>
            <div className="about-img-container">
              <img
                src="image_2020-08-11/image.png"
                srcset="image_2020-08-11/image@2x.png 2x,
                          image_2020-08-11/image@3x.png 3x"
                className="image"
                alt=""
              />
              <div className="about-img-shadow"></div>
            </div>
          </div>

          <div className="about-left">
            <div className="Andy-Griffith-turned">
              Andy Griffith turned us down.
            </div>
            <div className="Army-had-half-a-day">
              Army had half a day. Bad news. Andy Griffith turned us down. He
              didn't like his nice trailer. That's why you always leave a note!
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;