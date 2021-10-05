import React from 'react';

const ServiceCart = (props) => {
    const { name, price, img, duration, moduls, videos, enrolled, rating } = props.service;

    return (
        <div>
            <div className="col h-100">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-text">Price: {price}</h6>
                        <h6>Course Duration: {duration} Days</h6>
                        <h6>Modules: {moduls} </h6>
                        <h6>Total Videos: {videos} </h6>
                        <h6>Already Enrolled: {enrolled} </h6>
                        <h6> Avarage Reating: {rating}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;