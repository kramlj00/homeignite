"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  isToday,
  startOfDay,
  isBefore,
} from "date-fns";
import { twMerge } from "tailwind-merge";

const DatePicker = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | string>("");

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const handlePreviousMonth = () => {
    setCurrentMonth((prev) => subMonths(prev, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => addMonths(prev, 1));
  };

  const isDateSelected = (date: Date) => {
    return isSameDay(selectedDate, date);
  };

  const isDateDisabled = (date: Date) => {
    const today = startOfDay(new Date());
    if (isBefore(date, today)) return true;
    return false;
  };

  const handleDateSelect = (date: Date) => {
    if (isDateDisabled(date)) return;
    setSelectedDate(date);
  };

  return (
    <div className="w-full max-w-md">
      <div className="flex items-center justify-between mb-4">
        <button onClick={handlePreviousMonth} className="p-2">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-medium">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <button onClick={handleNextMonth} className="p-2">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-500"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {daysInMonth.map((date) => {
          const dayNumber = format(date, "d");
          const isSelected = isDateSelected(date);
          const isDisabled = isDateDisabled(date);
          const isCurrentDate = isToday(date);

          return (
            <div key={date.toString()} className="relative">
              <button
                onClick={() => handleDateSelect(date)}
                disabled={isDisabled}
                className={twMerge(
                  "p-2 text-center rounded-full h-10 w-10 cursor-pointer",
                  isSelected && "bg-blue-100 text-blue-600",
                  !isDisabled && "hover:bg-gray-100",
                  isDisabled && "text-gray-300 cursor-not-allowed"
                )}
              >
                {dayNumber}
                {isCurrentDate && (
                  <div className="m-auto w-1 h-1 bg-gray-400 rounded-full" />
                )}
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="w-5 h-5" />
          <span className="text-sm">Central European Time (8:11pm)</span>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
