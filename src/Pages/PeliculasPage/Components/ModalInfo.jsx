import React from 'react';
import { Modal, Card, Button } from 'antd';

const MovieModal = ({ visible, onClose, movie }) => {
  return (
    <Modal
      title={movie?.title}
      visible={visible}
      onCancel={onClose}
      footer={null} // Oculta el footer predeterminado del modal
    >
      <Card>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <div style={{ width: '150px', marginRight: '20px' }}>
            <div style={{ width: '150px', height: '200px', marginBottom: '10px', borderRadius: "15px", overflow: "hidden", }}>
              <img src={movie?.imageUrl} alt={movie?.title} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>

          </div>
          <div>
            <div>
              <strong>Título de la película:</strong> {movie?.title}
            </div>
            <div>
              <strong>Personajes:</strong> {movie?.characters}
            </div>
            <div>
              <strong>Fecha de estreno:</strong> {movie?.releaseDate}
            </div>
          </div>
        </div>
        <div style={{ marginTop: '20px' }}>
          <h2>Sinopsis</h2>
          <p>{movie?.synopsis}</p>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button type="primary" danger onClick={onClose}>
            Close
          </Button>
        </div>
      </Card>
    </Modal>
  );
};

export default MovieModal;