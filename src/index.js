import React from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, MarkerLayout, ConstructorJSONImport } from 'yandex-map-react';
import points from './data';
import userMapData from './userMapData';

const markerStyles = {
    width: '40px',
    height: '40px',
    overflow: 'hidden',
    border: '1px solid orange',
    background: '#FFF',
    borderRadius: '50%'
};

const mapState = {
    controls: ['default']
};

ReactDOM.render(
    <Map
        onAPIAvailable={function () { console.log('API loaded'); }}
        width={'100%'}
        state={mapState}
        center={[44.99675, 53.21573]}
        zoom={15}
        coordorder="longlat">
        {points.map(([lat, lon], i) =>  (
            <Marker key={'marker_' + i} lat={lat} lon={lon}>
                <MarkerLayout>
                    <div style={markerStyles}>
                        <img src="http://loremflickr.com/40/40"/>
                    </div>
                </MarkerLayout>
            </Marker>
        ))}

        <ConstructorJSONImport userMapData={userMapData} />
    </Map>,
    document.getElementById('container')
);