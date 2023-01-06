import React from 'react';
import {Link} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Trackgoods = (props) => {
  return (
    <div className='Contentback'>
        <div className='Content'>
    <center className='tag-content'>
    <h1>Track your packages</h1>
    <br></br>
    <hr>
    </hr>
    <br></br>
    <h2>Currently On Delivery</h2>
    </center>
    <div className='packages'>
    {}
    <div className='package'>
        <h3>Package ID:12423</h3>
        <span>Expected time of arrival: 12:30</span>
        <span>Requested time of arrival: 15:30</span>
    <Link to="/trackgoods/location" className='link-button'>
    <button>
        Track package on map
    </button>
    </Link>
    </div>
    <div className='package'>
        <h3>Package ID:12425</h3>
        <span>Expected time of arrival: 12:30</span>
        <span>Requested time of arrival: 15:30</span>
    <Link to="/trackgoods/location" className='link-button'>
    <button>
        Track package on map
    </button>
    </Link>
    </div>
    </div>
    </div>
    </div>
    
  )
}

export default Trackgoods;