import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CalendlyEmbed from "../components/calendly";

const Subscribe: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [showSuccessButton, setShowSuccessButton] = useState(false);

  return (
    <div className="min-h-screen bg-anaya-dark flex flex-col lg:flex-row">
      {/* Left Side: Content + Quote */}
      <div className="flex-1 flex flex-col justify-start px-6 py-12 lg:py-24 lg:px-12 bg-anaya-dark border-r border-anaya-border">
        <div className="max-w-xl w-full mx-auto space-y-8">
          {/* Logo & Back Button */}
          <div className="flex justify-between items-center mb-8">
            <div
              className="flex items-center gap-2.5 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="w-7 h-7 bg-anaya-blue rounded-[4px] flex items-center justify-center">
                <div className="w-3.5 h-3.5 border-[1.5px] border-white transform rotate-45"></div>
              </div>
              <span className="font-semibold text-lg tracking-tight text-white">
                Anaya
              </span>
            </div>
            <button
              onClick={() => navigate("/")}
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              ← Back
            </button>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
              Book Your Discovery Call
            </h1>
            <p className="text-lg text-anaya-muted leading-relaxed">
              Schedule a personalized meeting weith founder to see how it fits
              your needs.
            </p>
          </div>

          {/* Quote Section */}
          <div className="mt-12 pt-12 border-t border-anaya-border">
            <div className="space-y-6">
              {/* Features List */}
              <div className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-anaya-blue/10 border border-anaya-blue flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-anaya-blue rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm">
                      Automated Regulatory Mapping
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      RBI, SEBI, and IRDAI regulations encoded into your CI/CD
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-anaya-blue/10 border border-anaya-blue flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-anaya-blue rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm">
                      Real-time Infrastructure Scanning
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Continuous verification of cloud resources against
                      mandates
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-anaya-blue/10 border border-anaya-blue flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-anaya-blue rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm">
                      Audit-Ready Evidence
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Automated artifact generation for SOC 2, ISO 27001
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {showSuccessButton && (
            <div className="mt-8 p-4 bg-green-900/20 border border-green-800 rounded-lg">
              <p className="text-green-400 text-center font-medium">
                🎉 Thanks for booking! We'll see you soon.
              </p>
              <button
                onClick={() => navigate("/")}
                className="mt-3 w-full px-6 py-2.5 bg-anaya-blue text-white font-medium rounded-md hover:bg-anaya-bluehover transition-colors"
              >
                Return to Home
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Right Side: Calendly Embed */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:py-24 lg:px-12 bg-anaya-card">
        <div className="max-w-2xl w-full mx-auto">
          {/* Calendly Widget */}
          <div className="relative w-full min-h-[700px] bg-white rounded-lg overflow-hidden shadow-2xl">
            {/* Custom Loader */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                <div className="flex flex-col items-center gap-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-anaya-blue border-t-transparent"></div>
                  <p className="text-sm text-gray-500">Loading calendar...</p>
                </div>
              </div>
            )}
            <CalendlyEmbed
              onLoad={() => setLoading(false)}
              onEventScheduled={() => setShowSuccessButton(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
