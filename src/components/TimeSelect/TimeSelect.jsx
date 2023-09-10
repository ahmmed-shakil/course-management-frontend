import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import moment from "moment";
import React, { useState } from "react";

const TimeSelect = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [show, setShow] = useState(false);
  const startTime = moment("09:00 AM", "hh:mm A");
  const endTime = moment("05:00 PM", "hh:mm A");
  const interval = 60; // 60 minutes

  const generateTimeSlots = () => {
    const timeSlots = [];
    let currentTime = startTime.clone();

    while (currentTime.isBefore(endTime)) {
      timeSlots.push(currentTime.clone());
      currentTime.add(interval, "minutes");
    }

    return timeSlots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="relative">
      <div
        onClick={() => setShow(!show)}
        className="rounded-md h-14 px-3 text-lg w-full border-solid border-2 text-gray-800  border-gray-200 bg-slate-50 flex items-center justify-between cursor-pointer opacity-75"
      >
        <p>{!selectedDate ? "Select Time" : selectedDate.format("hh:mm A")}</p>
        {!show ? (
          <ChevronDownIcon className="h-4 w-4" />
        ) : (
          <ChevronUpIcon className="h-4 w-4" />
        )}
      </div>
      {show && (
        <div className=" max-h-80 overflow-x-scroll shadow-lg rounded-md p-3 flex items-center justify-center flex-col gap-4 absolute top-16 left-0 right-0 z-50 bg-gray-200 dark:bg-gray-800">
          <div className=" mt-28 w-full space-y-2">
            {timeSlots?.map((time, i) => (
              <div
                onClick={() => {
                  setSelectedDate(time);
                  setShow(false);
                }}
                className="hover:bg-gray-400 w-full py-2 rounded-md text-center transition-all duration-200 delay-100 ease-in-out cursor-pointer"
                key={i}
              >
                {time.format("hh:mm A")}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeSelect;
