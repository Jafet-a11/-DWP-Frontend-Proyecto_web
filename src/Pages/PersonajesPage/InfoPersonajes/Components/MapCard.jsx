import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { GoogleMap, MarkerF, InfoWindowF } from '@react-google-maps/api';

const MapCard = ({ Ubicacion }) => {
  const [coordinates, setCoordinates] = useState(null);
  const [infoOpen, setInfoOpen] = useState(false);

  useEffect(() => {
    console.log("Ubicación:", Ubicacion);
    if (Ubicacion) {
      setCoordinates(Ubicacion);
    }
  }, [Ubicacion]);

  return (
    <Card
      style={{
        width: 500,
        height: 400,
        borderRadius: '10px',
        border: '1px solid black',
        overflow: 'hidden',
      }}
      styles={{ body: { padding: 0 } }}
    >
      <div style={{ width: '100%', height: '400px' }}>
        {coordinates ? (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '400px' }}
            center={coordinates}
            zoom={14}
          >
            <MarkerF position={coordinates} onClick={() => setInfoOpen(true)}>
              {infoOpen && (
                <InfoWindowF onCloseClick={() => setInfoOpen(false)}>
                  <div>
                    <p>Ubicación: Lugar donde vive en los comcis</p>
                  </div>
                </InfoWindowF>
              )}
            </MarkerF>
          </GoogleMap>
        ) : (
          <div style={{ textAlign: 'center', paddingTop: '30px' }}>Cargando mapa...</div>
        )}
      </div>
    </Card>
  );
};

export default MapCard;
