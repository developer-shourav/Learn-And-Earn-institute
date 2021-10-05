import React from 'react';

const About = () => {
    return (
        <div className = " mt-5 container mx-0 row">
            <div  className="text-center mt-5 col-6 ">
                <img className= " " src="./about.jpg" alt="This is about us imgage" width = "800px"   />
            </div>

            <div className = " col-6 mt-5"> 
                <div className=" about-text">
                    <h1 className="fw-bold  text-uppercase mt-5  pt-5 ">About us</h1>
                    <p>We are provide many high demandable skill's remote tranng such as <strong>SEO, Degital marketing, Social Marketing, Ux/Ui design, Cyber Sequrity, Mobile App development  </strong>so on.We propive you at a simple cost.This is the right place to gain you goal... </p>
                    <button className ="about-btn">LEARN MORE</button>
             </div>

            </div>





        </div>
    );
};

export default About;