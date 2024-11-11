import { addDays } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";

function ResponsiveDateRangePicker() {
    const [range, setRange] = useState([
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection'
      }
    ]);
  
    return (
      <div>
        <h3>Responsive Date Range Picker</h3>
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setRange([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={range}
          rangeColors={['#3d91ff', '#3ecf8e', '#fed14c']}
          color="#0dcaf0" // Selected range color
        />
      </div>
    );
  }
  
  export default ResponsiveDateRangePicker;
  