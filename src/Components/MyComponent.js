import React from 'react'
import { Marker } from '@react-google-maps/api';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 23.763904,
    lng: 90.360411
};
const position = {
    lat: 23.763904,
    lng: 90.360411
};

const onLoad = infoWindow => {
    console.log('infoWindow: ', infoWindow)
}

function MyComponent() {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyDlo3KN_0st1ZDSddljFdGQAS5y7VkpY94"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >

                <Marker
                    onLoad={onLoad}
                    position={position}
                />

            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(MyComponent)