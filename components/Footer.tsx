import Link from "next/link";
import { CallToActionProps } from "@/types";
import { REGISTRATION_LINK } from "@/constants";

export const CallToAction: React.FC<CallToActionProps> = ({
  title = "Ready to Make Your Mark?",
  description = "Choose your committee and prepare to engage in diplomatic excellence at HUMUN",
  buttonText = "Register Now",
  buttonLink = "/register",
  className = "",
}) => {
  return (
    <footer className="text-center space-y-4 pt-12 pb-8 sm:pb-12 md:pb-16 border-t border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-900">Ready to Make Your Mark?</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
            Choose your committee and prepare to engage in diplomatic excellence at HUMUN
        </p>
        <Link href="/register" target='_blank'>
            <button className="bg-gradient-to-r from-primary-800 to-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:from-yellow-700 hover:to-yellow-900 transform hover:scale-105 cursor-pointer">
            Register Now
            </button>
        </Link>
    </footer>
  );
};
