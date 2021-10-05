import React, { useEffect, useState } from 'react';
import ServiceCart from '../ServiceCart/ServiceCart';

const Services = () => {
    const [services, setServices] = useState([]) ;
    useEffect(() => {
        fetch("./services.JSON")
        .then(res => res.json())
            .then(data => setServices(data))

    },[]);

    return (
        
        <div>
            <div className="container text-center mt-5"> <img src="./ourservices.png" alt="Our Services_images" /></div>
            <div className="card-container container mt-5 pt-5">
                <div className="row  row-cols-1 row-cols-md-3 g-4">
                   {
                       services.map(service => <ServiceCart 
                                            key={service._id}
                                            service={service}
                                            > 

                                     </ServiceCart>)
                   }

                </div>
            </div>
        </div>
    );
};

export default Services;