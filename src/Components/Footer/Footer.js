/*<-----Footer. JS Starting Here----->*/
import React from "react";
import "./Footer.css";


const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-container text-start">

                                {/* fa icon from FontAwesome  */}
                                <div className="icons-container d-flex text-center ">

                                    <div className="icon pe-2">
                                        <i className="fab fa-facebook"></i>
                                    </div>
                                    <div className="icon pe-2">
                                        <i className="fab fa-github"></i>
                                    </div>
                                    <div className="icon pe-2">
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                    <div className="icon">
                                        <i className="fab fa-twitter"></i>
                                    </div>
                                </div>
                                
                                {/* Copyright Text Here */}
                                <p className="mt-3">
                                    <small className="fw-bold">Tech-Edu © . All rights Reserved | 2021.</small>
                                </p>
                            </div>
                        </div>

                        {/* Contact Here */}
                        <div className="col-md-6">
                            <div className="right-footer-container d-flex justify-content-end">
                                <div className=" ">
                                    <div>
                                        <h5>+880 1900 000 001</h5>
                                        <p>
                                            60/1-A North Pirerbag
                                            <br />
                                            Mirpur, Dhaka 1216, Bangladesh
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
/*<-----Footer. JS Starting Here----->*/