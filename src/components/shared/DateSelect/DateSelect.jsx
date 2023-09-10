import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import moment from "moment/moment";
import React, { useState } from "react";

const DateSelect = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDates, setShowDates] = useState(false);
  const date = moment().format("DD MMM, YYYY");
  const days = [];

  // Function to check if a given day is Friday
  const isFriday = (date) => {
    return date.day() === 5; // Friday is day 5 (0-indexed)
  };

  // Generate an array of the next 4 days excluding Fridays
  for (let i = 1; days.length < 4; i++) {
    const nextDay = moment(date).add(i, "days");
    if (!isFriday(nextDay)) {
      days.push(nextDay);
    }
  }

  return (
    <div className=" relative">
      <div
        onClick={() => setShowDates(!showDates)}
        className=" rounded-md h-14 px-3 text-lg w-full border-solid border-2 text-gray-800  border-gray-200 bg-slate-50 flex items-center justify-between cursor-pointer opacity-75"
      >
        <p>
          {!selectedDate
            ? "Select Date"
            : moment(selectedDate).format("DD MMMM, YYYY")}
        </p>
        {!showDates ? (
          <ChevronDownIcon className=" h-4 w-4" />
        ) : (
          <ChevronUpIcon className=" h-4 w-4" />
        )}
      </div>
      {showDates && (
        <div
          className=" shadow-lg rounded-md p-3 flex items-center justify-center flex-col gap-4 absolute top-16 left-0 right-0 z-50 bg-gray-200 dark:bg-gray-800"
          id="date"
          onClick={(e) => {
            if (e.target.id !== "date") {
              setShowDates(false);
            }
          }}
        >
          {days?.map((day, i) => (
            <div
              onClick={() => {
                setSelectedDate(day);
                setShowDates(false);
              }}
              className=" hover:bg-gray-400 w-full py-2 rounded-md text-center transition-all duration-200 delay-100 ease-in-out cursor-pointer"
              key={i}
            >
              {moment(day).format("DD MMMM, YYYY")}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DateSelect;
