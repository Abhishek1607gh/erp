import React, { useState } from 'react';
import Calendar from 'react-calendar';

function OrdersCalender() {
  const [value, onChange] = useState(new Date());

  const handleDateChange = (date) => {
    onChange(date);
  };

  return (
    <div className='Calender'>
      <Calendar onChange={handleDateChange} value={value} />
    </div>
  );
}
    
export default OrdersCalender;
