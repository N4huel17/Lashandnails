import React, { useState } from 'react';
import 'react-bootstrap';
import '../styles/Diary.css';
import { Button, Modal, Form } from 'react-bootstrap';
import User from '../components/data/User'; // Asegúrate de importar correctamente User y tener acceso a él en este componente
import disponibilidadHorarios from './data/Data'; // Importa disponibilidadHorarios

const ReservationForm = ({ s }) => {
  const [fechaActual, setFechaActual] = useState(new Date());
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [instagram, setInstagram] = useState('');
  const [diaActual, setDiaActual] = useState(null); // Agregar estado para almacenar el día actual

  const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  const handlePrevWeek = () => {
    setFechaActual(new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate() - 7));
  };

  const handleNextWeek = () => {
    setFechaActual(new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate() + 7));
  };

  const horariosDisponiblesParaDia = (dia) => {
    const diaDisponibilidad = disponibilidadHorarios.find(item => item.day === dia);
    return diaDisponibilidad ? diaDisponibilidad.times : [];
  };

  const handleHorarioSeleccionado = (dia, horario) => {
    setDiaSeleccionado(`${dia} ${fechaActual.getDate()}`);
    setHorarioSeleccionado(horario);
    setDiaActual(new Date(fechaActual)); // Almacenar el día actual
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleGuardarTurno = () => {
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    // Agrega más console.log para otros campos
    
    // Verifica si los campos obligatorios están completos
    if (!nombre || !apellido || !email || !phone || !instagram || !diaSeleccionado || !horarioSeleccionado) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }
  
    // Agrega más console.log para verificar otros datos
    
    // Clona el array User para evitar mutaciones directas
    const newUserArray = [...User];
    
    // Agregar el turno al array clonado
    console.log('Guardando turno...');
    newUserArray.push({
      id: (newUserArray.length + 1).toString(),
      name: `${nombre} ${apellido}`,
      email,
      phone,
      instagram,
      service: s.name,
      data: `${diaSeleccionado} ${horarioSeleccionado}`,
      fechaHoraAgendado: diaActual.toLocaleString() // Usar diaActual para la fecha y hora del turno
    });
    console.log('Turno guardado:', newUserArray); // Verifica si los datos se agregaron correctamente
  
    // Cerrar el modal después de guardar los datos
    console.log(User);;
    setShowModal(false);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="agenda-container">
            <div className="semanas">
              <button className="flecha" onClick={handlePrevWeek}>&lt;</button>
              <button className="flecha" onClick={handleNextWeek}>&gt;</button>
              <span>{fechaActual.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="agenda">
              {diasSemana.map((dia, index) => {
                const diaActual = new Date(fechaActual);
                diaActual.setDate(diaActual.getDate() + index - fechaActual.getDay());
                return (
                  <div className='cont-horarios' key={index}>
                    <div className='dia-num'>
                      <strong className="numero-dia">{diaActual.getDate()}</strong>
                      <span className="nombre-dia">{dia}</span>
                    </div>
                    <div>
                      <div className='div-ul'>
                        <ul className="ul-horario">
                          {horariosDisponiblesParaDia(dia).length > 0 ? (
                            horariosDisponiblesParaDia(dia).map((horario, index) => (
                              <li className="hora" key={index} onClick={() => handleHorarioSeleccionado(dia, horario)}>
                                {horario}
                              </li>
                            ))
                          ) : (
                            <li>No hay horarios disponibles para este día</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}

              <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Detalles del Turno</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div style={{ display: 'flex' }}>
                    <img src={s.mainImage} alt="Imagen del servicio" style={{ width: '50%', float: 'left', marginRight: '20px', marginBottom: '15px' }} />
                    <div style={{ marginTop: '50px' }}>
                      <p style={{ fontWeight: 'bolder' }} >{s.name}</p>
                      <p>Día : {diaSeleccionado}  </p>
                      <p>Horario: {horarioSeleccionado}</p>
                    </div>
                  </div>
                  <div>
                    <Form>
                      <Form.Group controlId="formNombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                      </Form.Group>
                      <Form.Group controlId="formApellido">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                      </Form.Group>
                      <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su email" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </Form.Group>
                      <Form.Group controlId="formPhone">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
                      </Form.Group>
                      <Form.Group controlId="formInstagram">
                        <Form.Label>Instagram</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su usuario de Instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
                      </Form.Group>
                    </Form>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseModal}>
                    Cerrar
                  </Button>
                  <Button variant="primary" onClick={handleGuardarTurno}>
                    Guardar Turno
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;