import { Phone } from "lucide-react";

const PlansAndPricing = () => {
  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="mx-auto max-w-6xl relative my-48 bg-white/50 backdrop-blur-md rounded-3xl p-12 grid lg:grid-cols-2">
        <div className="pt-6 flex items-center">
          <div className="max-w-xl space-y-6">
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
            <div className="space-y-4 text-white">
              <p>
                We&apos;ll Help You Find The Best Fit For Your Business Needs
                And Tell You How To Unlock Additional Job Discounts, Dedicated
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
        </div>
      </div>
    </div>
  );
};

export default PlansAndPricing;
