import {Circle, MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'

const Map = () => {
    return (
        <MapContainer
            center={[-15.798490, -47.905322]}
            zoom={15}
            style={{height: '100%', width: '100%'}}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-15.798490, -47.905322]}>
                <Popup>
                    Aqui é o local do casamento
                </Popup>
            </Marker>

            <Circle center={[-15.798490, -47.905322]} radius={150} />
        </MapContainer>
    )
}

export default Map