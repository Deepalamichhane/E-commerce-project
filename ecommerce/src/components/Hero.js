import React from 'react';

function Hero() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-8">
          <div>
            <img src="../public/assets/bed.jpg" alt="Hero Image" className="img-fluid" />
          </div>
        </div>
        <div className="col-4">
          <div className="container">
            <div className="col ">
              <div className="row m-3" >20% Off</div>
              <div className="row m-3">Save 20%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;