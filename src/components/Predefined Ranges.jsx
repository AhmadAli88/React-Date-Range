import { useState } from 'react';
import { DateRangePicker, createStaticRanges, defaultStaticRanges } from 'react-date-range';

function CustomStaticRangePicker() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const customStaticRanges = createStaticRanges([
    {
      label: 'Last 7 Days',
      range: () => ({
        startDate: new Date(new Date().setDate(new Date().getDate() - 7)),
        endDate: new Date()
      })
    },
    {
      label: 'Last 30 Days',
      range: () => ({
        startDate: new Date(new Date().setDate(new Date().getDate() - 30)),
        endDate: new Date()
      })
    }
  ]);

  return (
    <DateRangePicker
      ranges={state}
      onChange={(item) => setState([item.selection])}
      staticRanges={[...defaultStaticRanges, ...customStaticRanges]}
    />
  );
}

export default CustomStaticRangePicker;
