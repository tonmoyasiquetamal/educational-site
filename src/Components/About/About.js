/*<-----About. JS Starting Here----->*/
import React from 'react';
import './About.css'
import image from "../../images/menu.jpg"

const About = () => {
    return (
        /*<-----The Section & Div For About Us , Picture Dynamically----->*/
        <div className="about-container">
            <div className="d-flex mt-5 justify-content-center">
                <h1 className="text-muted">About Us</h1>
            </div>
            
            <section className="hero-banner py-5 mt-5">
                <div className="container">
                    <div className="row row align-items-center">
                        <div className="col-lg-5 offset-lg-1 order-lg-1 mb-auto">
                            <img src={image} className="img-fluid" alt="Web Development" />
                        </div>
                        <div className="col-lg-6 mb-8">
                            <h1 className="mt-3 ">Gain Skill With Tech-Edu <br /> Tech-Edu</h1>
                            <p className="fw-bold lead my-5 text-dark">Tech-Edu is a state regulatory Institute responsible for monitoring and developing technical and vocational education in the secondary level, 2-year higher secondary level and 4-year Diploma in Engineering of Bangladesh.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    );
};



export default About;
/*<-----About. JS Starting Here----->*/