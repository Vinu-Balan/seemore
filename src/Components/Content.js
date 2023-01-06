import React from 'react'
import {Link} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Content = (props) => {
  return (
    <div className='Contentback'>
        <div className='Content'>
    <center className='tag-content'>
    <h1>SEEMORE</h1>
        <span>Track your products and get connected over the globe</span>
    </center>
    <div className='option-content'>
        <div className='chat-content'>
        <h3>
        Track your goods
        </h3>
        <br></br>
        <Link to="/trackgoods">
        <button type='button' className='start'>
        <a href='#'>Explore</a>
        </button>
        </Link>
        </div>
        <div className='chat-content'>
        <h3>
        Find Retailers
        </h3>
        <br></br>
        <button type='button' className='start'>
        <a href='#'>Explore</a>
        </button>
        </div>
        <div className='chat-content'>
        <h3>
        Find Manufacturers
        </h3>
        <br></br>
        <button type='button' className='start'>
        <a href='#'>Explore</a>
        </button>
        </div>
        <div className='chat-content'>
        <h3>
        View Distributors
        </h3>
        <br></br>
        <button type='button' className='start'>
        <a href='#'>Explore</a>
        </button>
        </div>
    </div>     
    </div>
    </div>
    
  )
}

export default Content