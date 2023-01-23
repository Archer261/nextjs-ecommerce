import React from 'react'
import Link from 'next/link';

import { Cart } from './'
import { useStateContext } from '../context/StateContext';


import { HiOutlineShoppingBag } from 'react-icons/hi'

const Navbar = () => {

    const { setShowCart, showCart, totalQuantities } = useStateContext();

    return (
        <div className='navbar-container'>
            <p className='logo'>
                <Link href={`/`}>
                    KJ-Prints Wear
                </Link>
            </p>

            <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
                <HiOutlineShoppingBag />
                <span className='cart-item-qty'>{totalQuantities}</span>
            </button>

            {showCart && <Cart />}
        </div>
    )
}

export default Navbar