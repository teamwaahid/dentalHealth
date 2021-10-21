import React from 'react';

const NewPatient = () => {
    return (
        <div className="container">
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://www.bowlesdentalcenter.com/wp-content/uploads/2021/05/smiling-woman-bowles-dental-3-980x653.jpg" class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Now welcoming new patients</h5>
                            <p class="card-text">One-of-a-kind dentistry for one-of-a-kind smiles</p><br />
                            <p class="card-text">Join the Dental Health Family</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">This is Dental Health</h5>
                            <p class="card-text">Our doors are always open to new patients. We take a lot of pride in the experience we provide to every patient. We love new patients who say they’ve never been excited about going to the dentist — we see it as an opportunity to show what we’re all about. Friendly, gentle, high-tech, and comfortable care.</p><br />
                            <p class="card-text">That’s all there is to it.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <img src="https://www.bowlesdentalcenter.com/wp-content/uploads/2021/03/dr-bowles-working-bowles-dental.jpg" class="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPatient;