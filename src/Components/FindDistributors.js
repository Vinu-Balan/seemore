import React from 'react';
import map_pic from "../images/google_map.jpg";
import acc from "../images/account.png"


export default function FindDistributors(){
    return(
        <div className='retailers-content'>
        <div className='search-container row'>
        
        <svg width="20" height="20" fill="currentColor" class="search-icon ml-5 absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
      </svg>
      <input class="search-bar focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Find Manufacturers..." />
        </div>
        <div className='retailers-list'>
            <h3>Relevant Searches</h3>
            <div className='retailer-search-result row'>
                <img src={acc} className="search-profile-pic" alt='dist_photo' />
            <div className='search-profile col'>
                <h3>TATA Steel Pvt Ltd</h3>
                <span className='location-text'>Location: T. Nagar, Chennai, 600028</span>
                <span className='location-text'>Type: Steel Manufacturers</span>
                <span className='search-contact'>Contact: +91 8847393729</span>
            </div>
            </div>
            <div className='retailer-search-result row'>
                <img src={acc} className="search-profile-pic" alt='dist_photo' />
            <div className='search-profile col'>
                <h3>Dalmia Cement Pvt Ltd</h3>
                <span className='location-text'>Location: Koyambedu, Chennai, 600028</span>
                <span className='location-text'>Type: Cement industry</span>
                <span className='search-contact'>Contact: +91 8847393729</span>
            </div>
            </div>
            <div className='retailer-search-result row'>
                <img src={acc} className="search-profile-pic" alt='dist_photo' />
            <div className='search-profile col'>
                <h3>Ashok Leyland</h3>
                <span className='location-text'>Location: T. Nagar, Chennai, 600028</span>
                <span className='location-text'>Type: Automobile Manufacturers</span>
                <span className='search-contact'>Contact: +91 8847393729</span>
            </div>
            </div>
        </div>
    </div>
    )
};