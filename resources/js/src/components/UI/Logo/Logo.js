import React from 'react';

import './Logo.css';

import Image from '../../../assets/images/Group 4@2x.png';
import Dark from '../../../assets/images/Group 4@2x.png';

export default ({ big, dark }) => (
    <div className="Logo mb-0 text-white" >
        {dark ?
            <img src={Dark} style={{ height: 70 }} />
            :
            <img src={Image} style={{ height: 70 }} />
        }
    </div>
);