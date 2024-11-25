import { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  add,
  sub,
  isSameDay,
  isSameMonth,
} from "date-fns";

import ArrowRight from "@/assets/icons/description/arrow-right.svg";
import ArrowLeft from "@/assets/icons/description/arrow-left.svg";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [markedDates, setMarkedDates] = useState<Date[]>([]);

  const startDate = startOfWeek(startOfMonth(currentDate));
  const endDate = endOfWeek(endOfMonth(currentDate));

  const days = [];
  let day = startDate;

  while (day <= endDate) {
    days.push(day);
    day = add(day, { days: 1 });
  }

  const handlePrevMonth = () => {
    setCurrentDate(sub(currentDate, { months: 1 }));
  };

  const handleNextMonth = () => {
    setCurrentDate(add(currentDate, { months: 1 }));
  };

  const toggleMarkDate = (date: any) => {
    setMarkedDates((prev) => {
      if (prev.some((marked) => isSameDay(marked, date))) {
        return prev.filter((marked) => !isSameDay(marked, date));
      } else {
        return [...prev, date];
      }
    });
  };

  const isMarked = (date: any) => {
    return markedDates.some((marked) => isSameDay(marked, date));
  };

  return (
    <div className="min-w-80 border border-neutrals-20 bg-white px-8 py-8 shadow-lg xl:w-96">
      <button className="mb-5 flex w-full items-center justify-center gap-4 border bg-white px-4 py-3 font-semibold text-primary-100 hover:bg-primary-100 hover:text-white">
        + Купити квиток
      </button>

      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-bold text-neutrals-100">
          {format(currentDate, "MMMM yyyy").toUpperCase()}
        </h2>
        <div className="flex gap-1">
          <button onClick={handlePrevMonth} className="text-primary-100">
            <img src={ArrowLeft} />
          </button>
          <button onClick={handleNextMonth} className="text-primary-100">
            <img src={ArrowRight} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 text-center text-neutrals-60">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 text-center text-sm">
        {days.map((day) => (
          <div
            key={day.toISOString()}
            onClick={() => toggleMarkDate(day)}
            className={`text-md flex h-10 w-10 cursor-pointer items-center justify-center rounded-full font-medium ${
              !isSameMonth(day, currentDate)
                ? "text-[#D6DDEB]"
                : isMarked(day)
                  ? "bg-primary-100 text-neutrals-0"
                  : "text-neutrals-100"
            }`}
          >
            {format(day, "d")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
