import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { MOCK_DATA } from "../mock";

const localizer = momentLocalizer(moment);

const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

export const MyCalendar = (props) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div
          style={{
            height: "1000px",
            padding: "20px",
            backgroundColor: "indianred",
          }}
        >
          <Calendar
            localizer={localizer}
            events={MOCK_DATA}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            style={{
              height: "100%",
              border: "1px solid black",
              borderRadius: "4px",
              backgroundColor: "yellow",
            }}
          />
          <Example />
        </div>
      </LocalizationProvider>
    </>
  );
};

export default MyCalendar;
