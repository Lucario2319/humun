"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";

export default function PricingPage() {
  // set your early bird deadline here
  const earlyBirdEndDate = new Date("2025-08-28");

  const [isEarlyBird, setIsEarlyBird] = useState(true);

  useEffect(() => {
    const now = new Date();
    setIsEarlyBird(now < earlyBirdEndDate);
  }, [earlyBirdEndDate]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative text-white py-24 px-6"
        style={{
          backgroundImage: "url(/pricingbg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary-600/30"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Pricing</h1>
          <div className="w-24 h-1 bg-primary-700 mx-auto"></div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Choose Your <span className="text-primary-600">Registration Plan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secure your spot at HUMUN VIII with our flexible registration
              options. Early bird rates available for a limited time.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Early Bird Pricing */}
            <div
              className={clsx(
                "relative rounded-2xl border overflow-hidden transform transition-all duration-300",
                isEarlyBird
                  ? "bg-white shadow-xl border-primary-300 scale-105"
                  : "bg-gray-100 text-gray-500 opacity-70"
              )}
            >
							{/* Badge */}
							{isEarlyBird ?
								<div className="absolute top-0 right-0 bg-gradient-to-r from-primary-600 to-blue-600 text-white px-4 py-2 rounded-bl-lg">
									<span className="text-sm font-semibold">
										Valid Until {earlyBirdEndDate.toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })}
									</span>
								</div>
							:
								<div className="absolute top-0 right-0 bg-gradient-to-r from-gray-400 to-gray-700 text-white px-4 py-2 rounded-bl-lg">
									<span className="text-sm font-semibold">
										EARLY BIRD CLOSED
									</span>
								</div>
							}

              <div className="p-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-2">
                    Early Bird Registration
                  </h3>
                  <p>Limited time offer - Register now and save!</p>
                </div>

                <div className="space-y-6 mb-8">
                  {/* Delegate Fee */}
                  <div className="flex justify-between items-center p-4 bg-primary-50 rounded-lg">
                    <div>
                      <h4 className="text-lg font-semibold">Individual Delegate</h4>
                      <p className="text-sm">Per person registration</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-primary-600">
                        PKR 4,500
                      </div>
                    </div>
                  </div>

                  {/* Delegation Fee */}
                  <div className="flex justify-between items-center p-4 bg-primary-100 rounded-lg">
                    <div>
                      <h4 className="text-lg font-semibold">School Delegation</h4>
                      <p className="text-sm">Per delegate in group registration</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-primary-700">
                        PKR 4,000
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="bg-gradient-to-r from-primary-100 to-blue-100 p-4 rounded-lg border-l-4 border-primary-600">
                    <h5 className="font-semibold mb-2">Early Bird Benefits:</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Everything in normal registration</li>
                      <li>• Guaranteed committee preference</li>
                    </ul>
                  </div>
                </div>
								<Link href="/register" target="blank">
									<button
										disabled={!isEarlyBird}
										className={clsx(
											"w-full py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg",
											isEarlyBird
											? "bg-gradient-to-r from-primary-800 to-primary-700 text-white hover:from-yellow-700 hover:to-yellow-900 transition-all transform hover:scale-105 cursor-pointer"
											: "bg-gray-400 text-gray-200 cursor-not-allowed"
										)}
										>
										Register Early Bird
									</button>
								</Link>
              </div>
            </div>

            {/* Regular Pricing */}
            <div
              className={clsx(
                "relative rounded-2xl border overflow-hidden transform transition-all duration-300",
                !isEarlyBird
                  ? "bg-white shadow-xl border-primary-300 scale-105"
                  : "bg-gray-100 text-gray-500 opacity-70"
              )}
            >
							{/* Badge */}
							{!isEarlyBird ?
								<div className="absolute top-0 right-0 bg-gradient-to-r from-primary-600 to-blue-600 text-white px-4 py-2 rounded-bl-lg">
									<span className="text-sm font-semibold">
										CURRENT RATES
									</span>
								</div>
							:
								<div className="absolute top-0 right-0 bg-gradient-to-r from-gray-400 to-gray-700 text-white px-4 py-2 rounded-bl-lg">
									<span className="text-sm font-semibold">
										Opens once Early Bird ends
									</span>
								</div>
							}
              
							<div className="p-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-2">Regular Registration</h3>
                  <p>Standard registration rates</p>
                </div>
								
                <div className="space-y-6 mb-8">
                  {/* Delegate Fee */}
                  <div className="flex justify-between items-center p-4 bg-primary-50 rounded-lg">
                    <div>
                      <h4 className="text-lg font-semibold">Individual Delegate</h4>
                      <p className="text-sm">Per person registration</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-primary-600">
                        PKR 5,500
                      </div>
                    </div>
                  </div>

                  {/* Delegation Fee */}
                  <div className="flex justify-between items-center p-4 bg-primary-100 rounded-lg">
                    <div>
                      <h4 className="text-lg font-semibold">School Delegation</h4>
                      <p className="text-sm">Per delegate in group registration</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-primary-700">
                        PKR 5,000
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-indigo-600">
                    <h5 className="font-semibold mb-2">
                      Regular Registration Includes:
                    </h5>
                    <ul className="text-sm space-y-1">
                      <li>• Networking sessions</li>
                      <li>• Certificate of participation</li>
                    </ul>
                  </div>
                </div>
								<Link href="/register" target="blank">
									<button
										disabled={isEarlyBird}
										className={clsx(
											"w-full py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg",
											!isEarlyBird
												? "bg-gradient-to-r from-primary-800 to-primary-700 text-white hover:from-yellow-700 hover:to-yellow-900 transition-all transform hover:scale-105 cursor-pointer"
												: "bg-gray-400 text-gray-200 cursor-not-allowed"
										)}
									>
										Register Now
									</button>
								</Link>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Registration Information</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{"What's"} Included</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      Three days of committee sessions and debates
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      Networking opportunities and social events
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      Certificate of participation
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Important Notes</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Delegation fees apply for groups of 5+ delegates
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Early bird rates valid until {earlyBirdEndDate.toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })}
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Limited spots available - register early
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Our registration team is here to help with any questions about fees, payment plans, or the registration process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:registration@humun.org" className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-primary-500 hover:text-primary-600 transition-colors duration-200">
                humun@habib.edu.pk
              </a>
              <a href="tel:+92-XXX-XXXXXXX" className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-primary-500 hover:text-primary-600 transition-colors duration-200">
                +92-XXX-XXXXXXX
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}