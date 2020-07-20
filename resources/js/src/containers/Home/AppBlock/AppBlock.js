import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faAngleDoubleRight, faGraduationCap, faCircle } from '@fortawesome/free-solid-svg-icons';

import './AppBlock.css';

const appBlock = ({ children, animation = "fade-up", img, title = '', subtitle = '', link = '/', color = '', popular }) =>
    <div data-aos={animation} className="AppBlock p-3">
        <div className={`shadow-sm bg-${popular ? `${color}-10` : "white"} position-relative overflow-hidden rounded-4 p-4`} style={{ transform: popular && 'scale(1.05)' }}>
            {popular && <div class={"bg-" + color + " w-100 pt-2 pb-1 text-uppercase text-center text-white position-absolute"} style={{ top: '-20%', right: '-50%', transform: 'rotate(45deg)', transformOrigin: '0 0' }}>MOST POPULAR</div>}

            <div className={`d-flex justify-content-center align-items-center embed-responsive embed-responsive-1by1 mx-auto my-4 bg-white rounded-circle border border-${color} shadow-${color}-circle border-3 position-relative p-3`} style={{ width: 108 }}>
                <div className="position-absolute w-80 embed-responsive embed-responsive-1by1 rounded-circle d-flex justify-content-center align-items-center" style={{ top: '50%', transform: 'translateY(-50%)' }}>
                    <img src={img} style={{ width: 66 }} />
                </div>
            </div>

            <div className={`my-4 py-2 px-4 bg-${color} rounded-2 position-relative overflow-hidden text-white text-center`} style={{ height: 62, margin: popular && '0 -2rem' }}>
                <div className="position-relative" style={{ top: '50%', transform: 'translateY(-50%)' }}>
                    <div className="text-500">{title}</div>
                    <div className="text-small">{subtitle}</div>
                </div>

                {!popular && <>
                    <FontAwesomeIcon icon={faCircle} className="text-xx-small position-absolute" style={{ top: '50%', left: 0, transform: 'translate(-50%, -50%)' }} />
                    <FontAwesomeIcon icon={faCircle} className="text-xx-small position-absolute" style={{ top: '50%', right: 0, transform: 'translate(50%, -50%)' }} />
                </>}
            </div>

            <div className="mb-3 pt-3 pb-4 border-bottom border-black-20">{children}</div>

            {link.includes('https') ? <a href={link} className={`text-${color} text-decoration-none`} target="_blank">
                Go to Site
                <FontAwesomeIcon icon={faAngleDoubleRight} className="ml-2" />
            </a> : <Link to={link} className={`text-${color} text-decoration-none`}>
                    Read More
                <FontAwesomeIcon icon={faAngleDoubleRight} className="ml-2" />
                </Link>}
        </div>
    </div >;

export default appBlock;