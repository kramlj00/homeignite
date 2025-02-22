import Button from "@/components/button/button";
import { BUTTON_VARIANT } from "@/components/button/button-variants.const";
import { Input } from "@/components/input/input";

const PickAMeetupForm = () => {
  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
          First Name
        </label>
        <Input id="firstName" placeholder="Enter your first name" />
      </div>
      <div>
        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
          Last Name
        </label>
        <Input id="lastName" placeholder="Enter your last name" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      <div>
        <label htmlFor="mobile" className="block text-sm font-medium mb-2">
          Mobile Number
        </label>
        <Input id="mobile" type="tel" placeholder="Enter your mobile number" />
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
      >
        Pick a meetup Time
      </Button>
    </form>
  );
};

export default PickAMeetupForm;
