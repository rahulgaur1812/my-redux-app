import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {

    return (
        <div>
            <span className='logo'>Redux Store</span>
            <div>
                <Link className='navlink' to='/'>
                    Home
                </Link>
                <Link className='navlink' to='/cart'>
                    Cart
                </Link>
            </div>
            <span className='cartCount'>Cart Item : 0</span>
        </div>
    )
}

export default Navbar;