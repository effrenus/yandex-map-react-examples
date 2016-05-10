import React from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';
import points from './data';

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
    <Map onAPIAvailable={function () { console.log('API loaded'); }} width={'100%'} state={mapState} center={[55.754734, 37.583314]} zoom={10}>
        {points.map(([lat, lon], i) =>  (
            <Marker key={'marker_' + i} lat={lat} lon={lon}>
                <MarkerLayout>
                    <div style={markerStyles}>
                        <img src="http://loremflickr.com/40/40"/>
                    </div>
                </MarkerLayout>
            </Marker>
        ))}
    </Map>,
    document.getElementById('container')
);