import React from 'react';

import './Logo.css';

import Image from '../../../assets/images/FILE16316 - Copy@2x.png';
import Dark from '../../../assets/images/FILE16316 - Copy@2x.png';

export default ({ big, dark }) => (
    <div className="Logo mb-0 text-white" >
        {dark ?
            <img src={Dark} />
            :
            <img src={Image} />
        }
    </div>
);