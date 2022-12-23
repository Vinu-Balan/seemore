import React from 'react'
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <div className='Header'>
        <div className='row'>
        <Link to="/"><div className='logo'>SEEMORE</div>
        </Link>
            <div className='menu'>
                <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/trackgoods">
                <li>Track Goods</li>
                </Link>
                <Link to="/retailers">
                <li>Retailers</li>
                </Link>
                <Link to="/customers">
                <li>Customers</li>
                </Link>
                <Link to="/distributors">
                <li>Distributors</li>
                </Link>
                </ul>
            </div>
        </div>
        <a href="#" className='login'>Login</a>
        </div>
      )
}
export default Header;