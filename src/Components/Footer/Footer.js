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

                                <div className="icons-container d-flex text-center ">

                                    <div className="icon pe-2">
                                        <i className="fab fa-facebook-square"></i>
                                    </div>
                                    <div className="icon pe-2">
                                        <i className="fab fa-twitter-square"></i>
                                    </div>
                                    <div className="icon pe-2">
                                        <i className="fab fa-instagram-square"></i>
                                    </div>
                                    <div className="icon">
                                        <i className="fab fa-youtube-square"></i>
                                    </div>
                                </div>

                                <p className="mt-3">
                                    <small>Tech-Edu © . All rights Reserved | 2021.</small>
                                </p>
                            </div>
                        </div>
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