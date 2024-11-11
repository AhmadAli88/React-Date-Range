import { addDays } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";

function DisabledDateRangePicker() {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  // Disable past dates and specific dates
  const isDateDisabled = (date) => {
    const blockedDates = [addDays(new Date(), 2), addDays(new Date(), 5)]; // Example blocked dates
    return date < new Date() || blockedDates.some(blockedDate => blockedDate.getTime() === date.getTime());
  };

  return (
    <div>
      <h3>Disabled Date Range Picker</h3>
      <DateRange
        onChange={(item) => setRange([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={range}
        minDate={new Date()}
        disabledDay={isDateDisabled} // Use disabledDay instead of disabledDates
      />
    </div>
  );
}

export default DisabledDateRangePicker;
