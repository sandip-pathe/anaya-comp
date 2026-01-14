import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  FileText,
  Server,
  ShieldCheck,
  Activity,
} from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden bg-anaya-dark">
      {/* Background Effects - Subtle Blue */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-anaya-blue/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[0%] right-[10%] w-[600px] h-[600px] bg-[#1E2235]/20 blur-[100px] rounded-full"></div>

        {/* Abstract Grid Lines - Technical */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#4150B5 1px, transparent 1px), linear-gradient(90deg, #4150B5 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col items-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-[1.15] text-center text-white max-w-4xl animate-fade-in-up">
          Automated Compliance <br />
          Infrastructure for India
        </h1>

        <p
          className="text-base md:text-lg text-anaya-muted max-w-2xl mx-auto mb-10 leading-relaxed text-center animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Anaya encodes RBI, SEBI, and IRDAI regulations into your codebase.{" "}
          <br className="hidden md:block" />
          Verify compliance programmatically, not manually.
        </p>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up mb-20"
          style={{ animationDelay: "0.2s" }}
        >
          <Link
            to="/subscribe"
            className="w-full sm:w-auto bg-anaya-blue text-white px-6 py-3 rounded-[6px] font-medium text-sm hover:bg-anaya-bluehover transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
          >
            View Verification Flow
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/subscribe"
            className="w-full sm:w-auto bg-transparent border border-anaya-blue text-anaya-blue px-6 py-3 rounded-[6px] font-medium text-sm hover:bg-anaya-blue/10 transition-all flex items-center justify-center gap-2"
          >
            Request Sample Report
          </Link>
        </div>

        {/* System Diagram Visual */}
        <div
          className="w-full max-w-5xl animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="border border-anaya-border bg-anaya-card rounded-lg p-1 overflow-hidden shadow-2xl">
            <div className="bg-[#0A0B0E] rounded border border-white/5 p-8 md:p-12 relative overflow-hidden">
              {/* Diagram Layout */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                {/* Step 1: Input */}
                <div className="flex flex-col items-center gap-4 w-full md:w-48 group">
                  <div className="w-16 h-16 rounded-lg bg-[#1A1C25] border border-anaya-border flex items-center justify-center relative z-10 group-hover:border-anaya-blue/50 transition-colors">
                    <FileText
                      className="text-gray-400 group-hover:text-anaya-blue transition-colors"
                      size={24}
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-mono text-anaya-blue mb-1">
                      INGESTION
                    </div>
                    <div className="text-sm font-medium text-white">
                      Regulatory
                      <br />
                      Sources
                    </div>
                    <div className="text-[10px] text-gray-500 mt-1">
                      RBI Master Directions
                      <br />
                      SEBI Circulars
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-transparent via-anaya-border to-transparent relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-anaya-dark border border-anaya-border"></div>
                </div>
                <div className="md:hidden h-12 w-[1px] bg-anaya-border"></div>

                {/* Step 2: Processing */}
                <div className="flex flex-col items-center gap-4 w-full md:w-48 group">
                  <div className="w-16 h-16 rounded-lg bg-[#1A1C25] border border-anaya-border flex items-center justify-center relative z-10 group-hover:border-anaya-blue/50 transition-colors">
                    <Server
                      className="text-gray-400 group-hover:text-anaya-blue transition-colors"
                      size={24}
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-mono text-anaya-blue mb-1">
                      MAPPING
                    </div>
                    <div className="text-sm font-medium text-white">
                      Policy
                      <br />
                      Engine
                    </div>
                    <div className="text-[10px] text-gray-500 mt-1">
                      Rule Encoding
                      <br />
                      Control Mapping
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-transparent via-anaya-border to-transparent relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-anaya-dark border border-anaya-border"></div>
                </div>
                <div className="md:hidden h-12 w-[1px] bg-anaya-border"></div>

                {/* Step 3: Validation */}
                <div className="flex flex-col items-center gap-4 w-full md:w-48 group">
                  <div className="w-16 h-16 rounded-lg bg-[#1A1C25] border border-anaya-border flex items-center justify-center relative z-10 group-hover:border-anaya-blue/50 transition-colors">
                    <Activity
                      className="text-gray-400 group-hover:text-anaya-blue transition-colors"
                      size={24}
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-mono text-anaya-blue mb-1">
                      EXECUTION
                    </div>
                    <div className="text-sm font-medium text-white">
                      Continuous
                      <br />
                      Verification
                    </div>
                    <div className="text-[10px] text-gray-500 mt-1">
                      Infrastructure Scan
                      <br />
                      Code Analysis
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-transparent via-anaya-border to-transparent relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-anaya-dark border border-anaya-border"></div>
                </div>
                <div className="md:hidden h-12 w-[1px] bg-anaya-border"></div>

                {/* Step 4: Output */}
                <div className="flex flex-col items-center gap-4 w-full md:w-48 group">
                  <div className="w-16 h-16 rounded-lg bg-anaya-blue/10 border border-anaya-blue flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(65,80,181,0.2)]">
                    <ShieldCheck className="text-anaya-blue" size={24} />
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-mono text-anaya-blue mb-1">
                      RESULT
                    </div>
                    <div className="text-sm font-medium text-white">
                      Audit-Ready
                      <br />
                      Evidence
                    </div>
                    <div className="text-[10px] text-gray-500 mt-1">
                      SAR Reports
                      <br />
                      Certifications
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Grid inside card */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>
            </div>
          </div>

          {/* Diagram Caption */}
          <div className="text-center mt-6 text-xs text-gray-500 font-mono">
            FIG 1.0 — SYSTEM ARCHITECTURE OVERVIEW
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
