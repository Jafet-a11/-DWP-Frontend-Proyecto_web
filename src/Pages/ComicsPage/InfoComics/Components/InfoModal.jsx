import React from 'react';
import { Modal, Card, Button } from 'antd';

const ComicModal = ({ visible, onClose, comic }) => {
  return (
    <Modal
      title={comic?.title}
      open={visible} // Cambiado de "visible" a "open"
      onCancel={onClose}
      footer={null}
    >
      <Card>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <div style={{ width: '150px', marginRight: '20px' }}>
            <div style={{ width: '150px', height: '200px', marginBottom: '10px', borderRadius: "15px", overflow: "hidden" }}>
              <img src={comic?.imageUrl} alt={comic?.title} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
          </div>
          <div>
            <div>
              <strong>Autor:</strong> {comic?.characters}
            </div>
            <div>
              <strong>Fecha de Publicación:</strong> {comic?.releaseDate}
            </div>
          </div>
        </div>
        <div style={{ marginTop: '20px' }}>
          <h2>Descripcion</h2>
          <p>{comic?.synopsis}</p>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button type="primary" danger onClick={onClose}>
            Cerrar
          </Button>
        </div>
      </Card>
    </Modal>
  );
};

export default ComicModal;
