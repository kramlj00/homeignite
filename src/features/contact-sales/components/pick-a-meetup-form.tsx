"use client";

import Button from "@/components/button/button";
import { BUTTON_VARIANT } from "@/components/button/button-variants.const";
import DatePicker from "@/components/date-picker";
import { Input } from "@/components/input/input";
import { Dispatch, SetStateAction } from "react";
import { PICK_A_MEETUP_STEPS, PICK_A_MEETUP_STEPS_LABELS } from "./constants";
import { BUTTON_SIZE } from "@/components/button/button-size";

interface IProps {
  step: string;
  setStep: Dispatch<SetStateAction<string>>;
}

const PickAMeetupForm = ({ step, setStep }: IProps) => {
  return (
    <>
      <h1 className="text-3xl text-green800 mb-6">
        {PICK_A_MEETUP_STEPS_LABELS[step]}
      </h1>
      {step === PICK_A_MEETUP_STEPS.STEP_1 && (
        <form className="space-y-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium mb-2"
            >
              First Name
            </label>
            <Input
              id="firstName"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium mb-2"
            >
              Last Name
            </label>
            <Input id="lastName" placeholder="Enter your last name" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium mb-2">
              Mobile Number
            </label>
            <Input
              id="mobile"
              type="tel"
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company Name
            </label>
            <Input id="company" placeholder="Enter your company name" />
          </div>
          <Button
            variant={BUTTON_VARIANT.ROUNDED}
            className="w-full normal-case text-sm sm:text-lg"
            onClick={() => setStep(PICK_A_MEETUP_STEPS.STEP_2)}
          >
            Pick a meetup Time
          </Button>
        </form>
      )}

      {step === PICK_A_MEETUP_STEPS.STEP_2 && (
        <div className="p-8 space-y-8 bg-white rounded-2xl">
          <h2 className="text-lg font-gotham-bold">Select a Date & Time</h2>
          <DatePicker onSubmit={() => setStep(PICK_A_MEETUP_STEPS.SUCCESS)} />
          <Button
            variant={BUTTON_VARIANT.ROUNDED}
            size={BUTTON_SIZE.SMALL}
            onClick={() => setStep(PICK_A_MEETUP_STEPS.STEP_1)}
          >
            Back
          </Button>
        </div>
      )}

      {step === PICK_A_MEETUP_STEPS.SUCCESS && (
        <div className="space-y-4">
          <h2 className="text-2xl font-gotham-bold">
            Thank you for scheduling a meeting with us!
          </h2>
          <p className="text-lg text-gray-800">
            We will get back to you as soon as possible.
          </p>
        </div>
      )}
    </>
  );
};

export default PickAMeetupForm;
