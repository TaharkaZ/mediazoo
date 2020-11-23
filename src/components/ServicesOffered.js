import React, { useState } from 'react';
import '../styles/components/Header.scss'
import { withRouter, Link, useRouteMatch, NavLink } from 'react-router-dom';
import Header from './Header'
import * as services from '../ServicesOffered.json';
const ServicesOffered = () => {
    const [data, setData] = useState(services.services);
        return(
        <div>
            <Header/>
            <div>
               {data.map( (service) => (
                   <div>
                        <div>{service.ServiceType}</div>
                        <div>{service.Description}</div>
                    </div>
               ))}
            </div>
               <div>{console.log(data)}</div>
      
        </div>
        );
}

export default withRouter(ServicesOffered);