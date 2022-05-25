import React from 'react'

function Map(props) {
    let lat = props.lat;
    let long = props.long;
    let iframeSource = `<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6535.532551112905!2d${long}!3d${lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1653500315040!5m2!1ses-419!2smx" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  return (
    <div dangerouslySetInnerHTML={{__html: iframeSource}}>
        
    </div>
  )
}

export default Map