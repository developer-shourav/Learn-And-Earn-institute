import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAddressCard, faSms } from '@fortawesome/free-solid-svg-icons' ;
const phone = <FontAwesomeIcon icon={faPhone} />
const address = <FontAwesomeIcon icon={faAddressCard} />
const inbox = <FontAwesomeIcon icon={faSms} />
const Contact = () => {
    return (
        <div className = "container d-flex  align-items-center justify-content-center mt-5 pt-5">
            {/* ------Contact Img Section--------  */}
            <div className="w-100  ">
                <img src="./contact.jpg" alt="" width ="700" />
            </div>
            {/* ------information  Section made with bootStrap--------  */}
            <div className=" w-100 contact-info">
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                {phone} <span className="ps-2 fw-bold">Phone</span>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body">
                                <strong>019955441235</strong> 
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                {inbox}  <span className="ps-2 fw-bold">E-mail</span>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                <strong>Shourav RajB123@gmail.com</strong>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                {address}  <span className="ps-2 fw-bold">Address</span>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body">
                                <strong>Alibaba len, Aldorado-420, Papua New Guinea</strong>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Contact;