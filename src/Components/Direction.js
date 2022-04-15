import React, { useState } from 'react'
import { DirectionsRenderer, DirectionsService, Marker } from '@react-google-maps/api';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '800px',
    height: '400px'
};

const center = {
    lat: 23.763904,
    lng: 90.360411
};

function Direction({origin, destination}) {
    const [directionresponse, setDirectionresponse] = useState(null)
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyDlo3KN_0st1ZDSddljFdGQAS5y7VkpY94"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >

                {
                    origin != '' && destination != '' &&   <DirectionsService
                    // required
                    options={{
                        destination: destination,
                        origin: origin,
                        travelMode: 'DRIVING'
                    }}
                    // required
                    callback={res => {
                        if (res !== null)
                            setDirectionresponse(res)
                    }}

                />
                }
              
                {
                    directionresponse &&
                    <DirectionsRenderer
                        // required
                        options={{
                            directions: directionresponse
                        }}
                        
                    />
                }

            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Direction)