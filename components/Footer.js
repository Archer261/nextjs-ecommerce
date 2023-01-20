import React from 'react'
import { RiInstagramFill, RiTwitterFill } from 'react-icons/ri'

import moment from 'moment'

const Footer = () => {
    return (
        <div className='footer-container'>
            <p>
                {moment().year()} KJ-Active All rights reserved
            </p>
            <p className='icons'>
                <RiInstagramFill />
                <RiTwitterFill />
            </p>
        </div>
    )
}

export default Footer