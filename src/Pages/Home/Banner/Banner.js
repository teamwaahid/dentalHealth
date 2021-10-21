import React from 'react';

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 pt-5">
                    <h1>Dental Health</h1>
                    <h6>Offering a calm, relaxing journey in our modern and opulent Port Adelaide Dental Spa Experience everyday luxury with Adelaide Dental Spa, the original dental medispa that brings facial and dental cosmetics under one roof. Located in Port Adelaide, you will feel the inviting and friendly vibes as soon as you walk in, we’re ready to make your dream smile and skin your reality.</h6>
                    <button type="button" className="btn btn-primary mt-3">Know More</button>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <img src="https://elements-cover-images-0.imgix.net/ad6f7666-4a1f-4e2d-b438-ac4bdc05d01d?auto=compress%2Cformat&fit=max&w=710&s=d11ce0d7e0ee22ca2c95a781fbf74e46" className="img-fluid" alt="..." />
                </div>
            </div>
        </div>
    );
};

export default Banner;