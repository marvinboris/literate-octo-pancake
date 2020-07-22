import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faLinkedin, faWhatsappSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

import './TeamBlock.css';

export default ({ team }) => team.map(({ children, img, color = 'limo', firstname, lastname, job, fb, li, wa, tw }) => <div key={Math.random()} className="TeamBlock p-3">
    <div className="rounded p-4">
        <div className="d-flex align-items-center mb-4">
            <div className="pr-4">
                <div style={{ width: 106, background: 'url("' + img + '") no-repeat center', backgroundSize: 'cover' }} className={"border border-2 border-white rounded-circle embed-responsive embed-responsive-1by1 shadow-" + color + "-circle"} />
            </div>

            <div>
                <div className="text-large text-uppercase text-darkblue border-bottom border-border-50 pb-2 mb-2 d-inline-block">
                    <span className="text-700">{firstname}</span> <span className="text-300">{lastname}</span>
                </div>

                <div className="text-secondary mb-2">{job}</div>

                <div style={{ width: 37, height: 8 }} className="rounded-pill bg-limo" />
            </div>
        </div>

        <div className="quote py-3">
            <div><FontAwesomeIcon icon={faQuoteLeft} size="lg" /></div>
            <div className="p-2">{children}</div>
            <div className="text-right"><FontAwesomeIcon icon={faQuoteRight} size="lg" /></div>
        </div>

        <div className="border-bottom border-black-20 my-3" />

        <div className="d-flex justify-content-end text-blue">
            <div className="px-2"><a href={fb}><FontAwesomeIcon size="2x" icon={faFacebookSquare} /></a></div>
            <div className="px-2"><a href={li}><FontAwesomeIcon size="2x" icon={faLinkedin} /></a></div>
            <div className="px-2"><a href={wa}><FontAwesomeIcon size="2x" icon={faWhatsappSquare} /></a></div>
            <div className="px-2"><a href={tw}><FontAwesomeIcon size="2x" icon={faTwitterSquare} /></a></div>
        </div>
    </div>
</div>);