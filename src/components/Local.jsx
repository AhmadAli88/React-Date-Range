import{ useState } from "react";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import { fr } from "date-fns/locale"; // Import French locale
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

function LocalizedDateRangePicker() {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  return (
    <div>
      <h3>Date Range Picker in French</h3>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setRange([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={range}
        locale={fr} // Set locale to French
      />
    </div>
  );
}

export default LocalizedDateRangePicker;
