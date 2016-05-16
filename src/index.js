import React from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';
import points from './data';
import createControl from './apiControl';

const markerStyles = {
    width: '40px',
    height: '40px',
    overflow: 'hidden',
    border: '1px solid orange',
    background: '#FFF',
    borderRadius: '50%'
};

const mapState = {
    // Supported values https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.Manager-docpage/#add-param-control
    controls: ['fullscreenControl', 'geolocationControl']
};

class Page extends React.Component {
    constructor () {
        super();
        this.state = {clicked: false};
    }

    onMapAvailable (map) {
        map.controls.add(createControl(this._ymaps), {float: 'left'});
    }

    onAPIAvailable (ymaps) {
        this._ymaps = ymaps;
    }

    render () {
        return (
            <Map
                width={'100%'}
                state={mapState}
                center={[55.754734, 37.583314]} zoom={10}
                onClick={() => this.setState({clicked: true})}
                onMapAvailable={this.onMapAvailable.bind(this)}
                onAPIAvailable={this.onAPIAvailable.bind(this)}>
                {points.filter((point, i) => !this.state.clicked || i > 2).map(([lat, lon], i) =>  {
                    return (
                    <Marker key={'marker_' + i} lat={lat} lon={lon} onClick={() => alert('Marker clicked.')}>
                        <MarkerLayout>
                            <div style={markerStyles}>
                                <img src="http://dummyimage.com/40x40/ccc/000"/>
                            </div>
                        </MarkerLayout>
                    </Marker>
                )})}
            </Map>
        );
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('container')
);