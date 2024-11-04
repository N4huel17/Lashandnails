import React, { useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/css/Diary2.css'
import { Container,  Table } from 'react-bootstrap';


export default function ReservationForm2() {
  const [reservations, setReservations] = useState([
    { day: 'Lunes 5 de mayo', time: '10:00' },
    { day: 'Martes 6 de mayo', time: '11:00' },
    { day: 'Miércoles 7 de mayo', time: '12:00' },
    { day: 'Jueves 8 de mayo', time: '13:00' },
    { day: 'Viernes 9 de mayo', time: '14:00' },
  ]);



  return (
    <Container>
     

      
      <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Día</th>
              <th>Horario</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
              <tr key={index}>
                <td>{reservation.day}</td>
                <td>{reservation.time}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};
 

