import {useState} from "react"
import { DateRangePicker } from 'react-date-range';

function BasicDateRangePicker() {
    const [state, setState] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
    ]);
  
    return (
      <DateRangePicker
        ranges={state}
        onChange={(item) => setState([item.selection])}
      />
    );
  }
  
  export default BasicDateRangePicker;
  