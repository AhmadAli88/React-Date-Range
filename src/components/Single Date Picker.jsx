import { useState } from 'react';
import { DateRange } from 'react-date-range';

function SingleDatePicker() {
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  });

  return (
    <DateRange
      editableDateInputs={true}
      onChange={(item) => setDate(item.selection)}
      moveRangeOnFirstSelection={false}
      ranges={[date]}
      singleDateSelection={true} // Enable single date selection
    />
  );
}

export default SingleDatePicker;
