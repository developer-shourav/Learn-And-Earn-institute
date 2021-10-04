import React from 'react';
import "./Footer.css" ;

const Footer = () => {
    return (
        <div className="footer pt-5">
            <div className="row mx-auto ms-5 ps-5 ">
                <div className="col-6">
                    <h2> Letest Courses</h2>
                    <h5>Ethikal haking</h5>
                    <h5>Social media Marketing</h5>
                    <h5>Content Writing</h5>
                    <h5>Web Design/ Devolopement</h5>
                    <h5>Degital marketing</h5>
                </div>

                <div className="col-6 ">
                    <img src="./payment.png" alt="" />
                </div>

            </div>
            <div className="copy-right text-center pm-1">Copyright © 2021 ShouravRajB.com</div>
        </div>
    );
};

export default Footer;