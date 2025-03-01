"use client";

import DatePicker from "@/components/date-picker";
import { Phone } from "lucide-react";

import { Clock } from "lucide-react";
import { useState } from "react";

const BookMeeting = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section
      className="max-w-5xl mx-auto px-4 py-12 relative"
      id="book-meeting"
    >
      <div className="space-y-8 mb-16">
        <h1 className="text-center text-5xl md:text-6xl">Talk to an expert</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto border border-gray-200 rounded-xl">
        <div className="w-full max-w-[480px] p-8 space-y-6 border-r border-gray-200">
          <div className="space-y-2">
            <h2 className="text-sm font-gotham-bold text-gray-500">
              ACME Inc.
            </h2>
            <h1 className="text-3xl font-gotham-medium">Reservation Page</h1>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="h-5 w-5" />
              <span>30 min</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="h-5 w-5" />
              <span>Phone call</span>
            </div>
          </div>

          <p className="text-gray-600">
            This is an example of a meeting you would have with a potential
            customer to demonstrate your product.
          </p>

          <div className="pt-6">
            <div className="flex items-center justify-between text-sm">
              <button className="text-blue-600 hover:underline">
                Cookie settings
              </button>
              <button className="text-gray-500 hover:underline">
                Report abuse
              </button>
            </div>
          </div>
        </div>

        {!isSubmitted ? (
          <div className="p-8 space-y-8">
            <h2 className="text-lg font-gotham-bold">Select a Date & Time</h2>
            <DatePicker onSubmit={() => setIsSubmitted(true)} />
          </div>
        ) : (
          <div className="p-8 space-y-8">
            <h2 className="text-2xl font-gotham-bold">
              Thank you for scheduling a meeting with us!
            </h2>
            <p className="text-gray-500">
              We will get back to you as soon as possible.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookMeeting;
