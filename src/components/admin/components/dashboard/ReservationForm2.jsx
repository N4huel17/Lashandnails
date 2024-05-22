import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/css/Diary2.css'

export default function ReservationForm2() {
  const [selectedDate, setSelectedDate] = useState(null);

  const availableDates = [
    new Date('2024-05-22T10:00:00'),
    new Date('2024-05-23T14:00:00'),
    new Date('2024-05-24T16:00:00'),
  ];

  const isAvailable = (date) => {
    return availableDates.some(
      availableDate => 
        date.getFullYear() === availableDate.getFullYear() &&
        date.getMonth() === availableDate.getMonth() &&
        date.getDate() === availableDate.getDate() &&
        date.getHours() === availableDate.getHours() &&
        date.getMinutes() === availableDate.getMinutes()
    );
  };

  return (
    <div className="calendar-container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Seleccione una fecha y hora</h5>
          <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="Hora"
            dateFormat="MMMM d, yyyy h:mm aa"
            inline
            highlightDates={availableDates}
            filterDate={isAvailable}
            filterTime={isAvailable}
            className="custom-calendar"
          />
          {selectedDate && (
            <div className="mt-3">
              <h6>Fecha y hora seleccionadas:</h6>
              <p>{selectedDate.toLocaleString()}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}