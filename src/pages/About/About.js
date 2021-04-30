import React from 'react';
import PropTypes from 'prop-types';
import './scss/about.css';
import './scss/mediaAbout.css';

import plates from '../../assets/img/custom/plates.png';
import spoons from '../../assets/img/custom/spoons.png';
import SmallFlower from '../../components/Flowers/SmallFlower';
import BigFlower from '../../components/Flowers/BigFlower';

const About = ({ tittleData }) => {
  const elem = tittleData.map((item) => {
    const {
      id,
      flowerTittle,
      tittle,
      classSmallFlower,
      classBigFlower
    } = item;

    return (
      id === 'about' ? (
        <div
          id="about"
          key={id}
        >
          <div className="section-tittle">
            <div className="section-tittle-subtitle">
              <SmallFlower
                flowerTittle={flowerTittle}
                classSmallFlower={classSmallFlower}
              />
            </div>
            <div className="section-tittle-line">
              <h2>{tittle}</h2>
            </div>
          </div>
          <div className="dishes">
            <div className="dishes-img">
              <div className="dishes-img-bg" />
              <img src={plates} alt="plates" />
            </div>
            <div className="dishes-txt">
              <h3>
                WOODIES
                <span>
                  is the
                </span>
                home of
                <br />
                modern wooden furniture
              </h3>
              <h4>
                the answer to your need for furniture
                <br />
                with shapes, sizes and colors.
              </h4>
            </div>
          </div>
          <div className="customized">
            <h3>
              Customized furniture
              <span>
                made just for you
                <br />
              </span>
            </h3>
            <h4>
              Get it easy to adjust furniture to the shape and size of your
              <br />
              dwelling or business.
            </h4>
            <div className="customized-img">
              <img src={spoons} alt="spoons" />
            </div>
          </div>
          <BigFlower classBigFlower={classBigFlower} />
        </div>
      ) : null
    );
  });

  return (
    <>
      {elem}
    </>
  );
};

About.propTypes = {
  tittleData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default About;
