import React from 'react';

const HomeCard = (props) => {
    const{name, price, img} = props.product ;
    return (
        <div>
            <div className="col h-100">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Price: {price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;