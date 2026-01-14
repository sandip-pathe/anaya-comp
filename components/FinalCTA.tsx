import React from "react";
import { Link } from "react-router-dom";

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#161821] to-[#0E0F13] text-white text-center px-4 border-t border-anaya-border">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Secure your infrastructure.
        </h2>
        <p className="text-lg opacity-70 mb-10 max-w-xl mx-auto">
          Join engineering teams at leading Indian fintechs using Anaya for
          automated governance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/subscribe"
            className="bg-anaya-blue text-white px-8 py-3 rounded-[6px] font-medium text-sm hover:bg-anaya-bluehover transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
          >
            Start Integration
          </Link>
          <Link
            to="/subscribe"
            className="bg-transparent border border-anaya-border text-white px-8 py-3 rounded-[6px] font-medium text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-2"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
