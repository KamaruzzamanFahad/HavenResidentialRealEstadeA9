import React from 'react';
import { useLocation } from 'react-router-dom';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker, Popup } from 'leaflet';

const Detil = () => {
    const locationdata = useLocation();
    const { Image,
        estate_title,
        id,
        segment_name,
        description,
        price,
        Status,
        Area,
        location,
        facilities,
        category, } = locationdata.state;
    const position = [51.505, -0.09]


    return (
        <div className='flex'>
            <div>
                <img src={Image} alt="" />
                <h1>{estate_title}</h1>
                <p>{description}</p>
                <ul>
                    {
                        facilities.map((item, i) => (
                            <li>{item}</li>
                        ))
                    }
                </ul>

                <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {/* <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
                </MapContainer>
            </div>

            <div>
                contract
            </div>

        </div>
    );
};

export default Detil;