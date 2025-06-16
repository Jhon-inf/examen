import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card1() {
  const [modalAbierto, setModalAbierto] = useState(null);

  const abrirModal = (id) => setModalAbierto(id);
  const cerrarModal = () => setModalAbierto(null);

  const cursos = [
    {
      id: 'diablada',
      titulo: 'Diablada',
      descripcion: 'Originaria de Oruro, representa la lucha entre el bien y el mal. Es famosa por sus máscaras demoníacas y trajes brillantes.',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Diablada_Oruro_Bolivia_2_febrero_origen.jpg',
      inversion: '700 Bs',
      duracion: '2 meses'
    },
    {
      id: 'morenada',
      titulo: 'Morenada',
      descripcion: 'Muy popular en La Paz y Oruro, con trajes pesados y pasos lentos que simbolizan a los esclavos africanos traídos a las minas.',
      imagen: 'https://i.pinimg.com/736x/17/70/26/17702634f9d8f0a740a2122a0cc487d6.jpg',
      inversion: '500 Bs',
      duracion: '3 a 4 semanas'
    },
    {
      id: 'tinku',
      titulo: 'Tinku',
      descripcion: 'Danza ritual del altiplano que simula un combate ceremonial entre comunidades.',
      imagen: 'https://i.pinimg.com/736x/f6/bd/6c/f6bd6ccf66adc51dbb0fb3e5ee7b02a9.jpg',
      inversion: '600 Bs',
      duracion: '4 semanas'
    }
  ];

  return (
    <div className="card1">
      {cursos.map(curso => (
        <div className="card mb-3" style={{ maxWidth: '540px' }} key={curso.id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={curso.imagen} className="img-fluid rounded-start" alt={curso.titulo} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{curso.titulo}</h5>
                <p className="card-text">{curso.descripcion}</p>
                <button className="btn btn-primary" onClick={() => abrirModal(curso.id)}>Precio del Curso</button>
              </div>
            </div>
          </div>

          {modalAbierto === curso.id && (
            <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Danza {curso.titulo}</h5>
                    <button type="button" className="btn-close" onClick={cerrarModal}></button>
                  </div>
                  <div className="modal-body">
                    <p>Inversión: {curso.inversion}</p>
                    <p>Duración del curso: {curso.duracion}</p>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-secondary" onClick={cerrarModal}>Cerrar</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Card1;