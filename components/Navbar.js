import React from 'react'
import Link from 'next/link';

import { HiOutlineShoppingBag } from 'react-icons/hi'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <p className='logo'>
                <Link href={`/`}>
                    L-Active Wear
                </Link>
            </p>

            <button type='button' className='cart-icon' onClick=''>
                <HiOutlineShoppingBag />
                <span className='cart-item-qty'>1</span>
            </button>
        </div>
    )
}

export default Navbar