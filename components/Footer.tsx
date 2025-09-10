import Link from "next/link";
import { CallToActionProps } from "@/types";

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
        <Link href="/register">
            <button className="bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer">
            Register Now
            </button>
        </Link>
    </footer>
  );
};
