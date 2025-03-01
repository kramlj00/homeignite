"use client";

import Link from "next/link";
import PickAMeetupForm from "./pick-a-meetup-form";
import { Phone } from "lucide-react";
import { useState } from "react";
import { PICK_A_MEETUP_STEPS } from "./constants";

const PlansAndPricing = () => {
  const [step, setStep] = useState(PICK_A_MEETUP_STEPS.STEP_1);

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="mx-auto max-w-6xl relative my-48 bg-white/50 backdrop-blur-md rounded-3xl p-4 sm:p-8 md:p-12 grid lg:grid-cols-2 gap-10">
        <div className="max-w-xl space-y-6 pt-6">
          <div className="space-y-2">
            <p>15-Min Video Meeting</p>
            <h1 className="text-4xl text-white md:text-5xl font-gotham-medium flex flex-col gap-2">
              <div>
                <span className="text-blue500">Membership</span> Plans
              </div>
              <div>
                <span className="text-blue500">And</span> Pricing
              </div>
            </h1>
          </div>
          <div className="space-y-4 text-white font-gotham-medium">
            <p>
              We&apos;ll Help You Find The Best Fit For Your Business Needs And
              Tell You How To Unlock Additional Job Discounts, Dedicated
              Support, And Expanded Features To Power Your Workflow.
            </p>
            <div className="space-y-2">
              <p>Want To Skip The Form? Call Us Instead:</p>
              <p>Mon-Fri, 9am-5pm ET</p>
              <p className="flex items-center gap-2 pt-2">
                <Phone className="h-5 w-5" />
                <a href="tel:(828) 2132 2112" className="hover:underline">
                  (828) 2132 2112
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="backdrop-blur-2xl rounded-3xl px-4 py-8 sm:p-10">
          <PickAMeetupForm step={step} setStep={setStep} />
          {step !== PICK_A_MEETUP_STEPS.SUCCESS && (
            <p className="text-sm text-black mt-4">
              By Submitting This Form, You Agree To Permit{" "}
              <span className="text-blue900">Homeignite</span> To Contact You
              Via Phone, Email, Or Text Message, Which May Be Automated,
              Regarding <span className="text-blue900">Homeignite</span>{" "}
              Products And Other Promotions And Have Read And Acknowledge Our{" "}
              <Link href="#" className="underline">
                Privacy Policy
              </Link>
              . Consent Is Not A Condition Of Any Purchase And May Be Revoked At
              Any Time.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlansAndPricing;
