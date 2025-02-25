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
  isWeekend,
} from "date-fns";
import { twMerge } from "tailwind-merge";
import Button from "../button";
import { BUTTON_VARIANT } from "../button/button-variants.const";
import { BUTTON_SIZE } from "../button/button-size";

interface TimeSlot {
  hours: number;
  minutes: number;
  formatted: string;
}

const DatePicker = ({ onSubmit }: { onSubmit: () => void }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | string>("");
  const [selectedTime, setSelectedTime] = useState<TimeSlot | null>(null);

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const firstDayOfMonth = startOfMonth(currentMonth);
  const dayOfWeek = format(firstDayOfMonth, "i"); // 1-7, Monday-Sunday
  const paddingDays = Array(Number(dayOfWeek) - 1).fill(null);

  const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const timeSlots: TimeSlot[] = Array.from({ length: 17 }, (_, i) => {
    const hours = 9 + Math.floor(i / 2);
    const minutes = (i % 2) * 30;
    return {
      hours,
      minutes,
      formatted: `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`,
    };
  });

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
    if (isSameDay(date, today) || isBefore(date, today) || isWeekend(date))
      return true;

    return false;
  };

  const handleDateSelect = (date: Date) => {
    if (isDateDisabled(date)) return;
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (slot: TimeSlot) => {
    if (typeof selectedDate === "string") return;
    setSelectedTime(slot);
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
        {paddingDays.map((_, index) => (
          <div key={`padding-${index}`} className="p-2" />
        ))}
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

      {selectedDate && (
        <div className="mt-6 border-t pt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Select Time
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((slot) => (
              <button
                key={slot.formatted}
                onClick={() => handleTimeSelect(slot)}
                className={twMerge(
                  "p-2 text-sm rounded-md border",
                  selectedTime?.formatted === slot.formatted
                    ? "bg-blue-100 border-blue-300 text-blue-600"
                    : "hover:bg-gray-50 border-gray-200"
                )}
              >
                {slot.formatted}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="my-10">
        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="w-5 h-5" />
          <span className="text-sm">
            {selectedTime
              ? `Selected: ${format(selectedDate as Date, "dd MMM yyyy")} at ${
                  selectedTime.formatted
                }`
              : "Central European Time (8:11pm)"}
          </span>
        </div>
      </div>
      <Button
        variant={BUTTON_VARIANT.ROUNDED}
        className="text-md normal-case font-gotham-medium"
        size={BUTTON_SIZE.SMALL}
        disabled={!selectedDate || !selectedTime}
        onClick={onSubmit}
      >
        Schedule Meeting
      </Button>
    </div>
  );
};

export default DatePicker;
