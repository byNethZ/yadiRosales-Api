import React from "react";
//import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
/* import {
  useJsApiLoader,
  GoogleMap
} from '@react-google-maps/api'; */
//import GoogleMap from "react-google-maps/lib/components/GoogleMap";
import GoogleMap from "simple-react-google-maps";

import credentials from "./../credentials";

//35.0984158,-85.3087308

function Map(props) {
  /*   const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: credentials.mapsKey
  }); */

  let lat = props.lat ? parseFloat(props.lat) : 35.0424284;
  let long = props.long ? parseFloat(props.long) : -85.1687958;
  const center = { lat: lat, lng: long };
  //let iframeSource = `<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6535.532551112905!2d${long}!3d${lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1653500315040!5m2!1ses-419!2smx" width="900" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  return (
    <div>
      <GoogleMap
        apiKey={credentials.mapsKey}
        center={center}
        zoom={15}
        style={{ width: "100%", height: "500px" }}
        markers={center}
      />
    </div>
  );
}

export default Map;

/* export default withScriptjs(
  withGoogleMap(
    Map
  )
); */

/* 
<div dangerouslySetInnerHTML={{ __html: iframeSource }}></div>
*/
