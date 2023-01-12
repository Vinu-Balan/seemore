import React from 'react';
import map_pic from "../images/google_map.jpg";
import acc from "../images/account.png"
// import GoogleMapReact from 'google-map-react';


// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MapTrack(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    // <div height="600px" width="600px">
    //     <div style={{ height: '10vh', width: '20vh' }}>
    //   <GoogleMapReact
    //     bootstrapURLKeys={{ key: "" }}
    //     defaultCenter={defaultProps.center}
    //     defaultZoom={defaultProps.zoom}
    //   >
    //     <AnyReactComponent
    //       lat={59.955413}
    //       lng={30.337844}
    //       text="My Marker"
    //     />
    //   </GoogleMapReact>
    // </div>
    // </div>
    <div className=''>
    <center className='map-content'>
    <h2 className='font-bold'>Your Package is currently here!</h2>
    <h2>Package ID: 12423</h2>
    <img src={map_pic} className="map" alt='tracking_map' width="40%" height="40%" />
    <div className='col d-contact'>
    <img src={acc} className="acc" alt='dist_photo' />
        <h2>Distributor Name:  N. Rajesh</h2><hr></hr>
        <h2>Contact : +91 9942298028</h2>
    </div>
    </center>
        
    </div>
  );
}