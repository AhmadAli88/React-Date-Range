import { useState } from "react";
import { DateRangePicker } from "react-date-range";

function MultiDateRangePicker() {
    const [ranges, setRanges] = useState([
      { startDate: new Date(), endDate: new Date(), key: 'range1' },
      { startDate: new Date(), endDate: new Date(), key: 'range2' }
    ]);
  
    return (
      <DateRangePicker
        onChange={(item) => {
          const updatedRanges = ranges.map(range =>
            item[range.key] ? item[range.key] : range
          );
          setRanges(updatedRanges);
        }}
        ranges={ranges}
      />
    );
  }
  
export default MultiDateRangePicker;
  