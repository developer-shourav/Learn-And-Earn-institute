import React from 'react';
import "./Footer.css" ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate,faCode,faSun, faMoon, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const logo = <FontAwesomeIcon icon={faUserGraduate} />
const sun = <FontAwesomeIcon icon={faSun} />
const moon = <FontAwesomeIcon icon={faMoon} />
const code = <FontAwesomeIcon icon={faCode} />
const arrow = <FontAwesomeIcon icon={faArrowRight} />
const Footer = () => {
    return (
        <div className="footer  pt-5 "> 
            <div className="container">
                <div className="row  gx-4">
                    <div className="col-4">
                        <h2 className="logo-text"><span className="logo">{logo}</span>  Learn and Earn</h2>
                        <p>We are here for make your goal easier.Go ahead</p>
                        <p>Keep clam and code.</p>
                        <p>Always Remember your god. Keep coding</p>
                    
                    <div className="row my-4 ">
                            <div className="col-3 "><span className="icons">{sun}</span></div>
                            <div className="col-3 "><span className="icons">{code}</span></div>
                            <div className="col-3 "><span className="icons">{code}</span></div>
                            <div className="col-3 "><span className="icons">{moon}</span></div>
                            
                    </div>

                    </div>
                    <div className="col-4 ">
                        <h3>Letest courses</h3>
                        <div className="row gx-5">
                            <div className="col-6">
                                <p>Grapic design</p><hr />
                                <p>Web design</p><hr />
                                <p>App Development</p><hr />
                                <p>Cyber Sequrity</p><hr />
                            </div>
                            <div className="col-6">
                                <p>Ethical haking</p><hr />
                                <p>Advance SEO</p><hr />
                                <p>Degital marketing</p><hr />
                                <p>Social media Marketing</p><hr />
                            </div>
                        </div>

                    </div>
                    <div className="col-4">
                        <h3>Newsletter</h3>
                        <p>Suscribe our newsletter to Get More Updates and Join our course information</p>
                        <input className="email-box" type="text" placeholder="Exter Your Email" /> <button className="email-box-btn" >{arrow} </button>


                    </div>
                </div>
                <p className="text-center pb-4 mt-5"> Copyright © 2021 Shourav RajB.com</p>
            </div>   
        </div>
    );
};

export default Footer;