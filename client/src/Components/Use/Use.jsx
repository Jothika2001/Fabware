import React from 'react';
import './Use.css'; // Assuming you'll link the CSS file here
import images from '../../assets/images';
import { Link } from 'react-router-dom';

const Use = () => {
  return (
    <div className="use-wrapper">
      <div className="use-container">
        <div className="use-content" style={{ marginLeft: '30px' }}>
          <p className="use-heading">Why You Should <br />
            Buy The FABWARE <br />
            Lint Roller?</p>
          <p className="use-description">
            Quickly removes lint, pet hair, dust, and dirt from clothing, furniture, and other surfaces without the need for a vacuum.
          </p>
          <div className="use-image-wrapper">
            <img src={images.lintRoller} alt="FABWARE Lint Roller" className="use-image" />
          </div>
        </div>

        <div className="use-bb-box">
          <div className="use-image-grid">
            <div className="use-image-row">
              <div>
                <img src={images.img1} alt="Lint Roller Image 1" className="use-grid-img" />
              </div>
              <div>
                <img src={images.img2} alt="Lint Roller Image 2" className="use-grid-img" />
              </div>
            </div>
            <div className="use-image-row">
              <div>
                <img src={images.img3} alt="Lint Roller Image 3" className="use-grid-img" />
              </div>
              <div>
                <img src={images.img4}alt="Lint Roller Image 4" className="use-grid-img" />
              </div>
            </div>
            <div className="use-image-row">
              <div>
                <img src={images.img5} alt="Lint Roller Image 5" className="use-grid-img" />
              </div>
              <div>
                <img src={images.img6} alt="Lint Roller Image 6" className="use-grid-img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="use-footer">
        <div>
          <h2 style={{ fontWeight: 500, marginBottom: '20px' }}>Made By FABWARE</h2>
        </div>
        <div >
          <h1 className='use-lint'>If You Want To Use Lint Cleaner</h1>
          <h1 style={{ textAlign: 'center' }}>Click Here To Purchase</h1>
        </div>
        <div>
          <Link className="use-shop-btn" to="/products">Shop Now &#8594;</Link>
        </div>
      </div>
    </div>
  );
};

export default Use;
