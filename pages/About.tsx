import React, { useState } from "react";
import {
  ArrowRight,
  Shield,
  Users,
  Globe,
  ChevronDown,
  Terminal,
  Lock,
  Scale,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How is Anaya different from tools like Vanta or Drata?",
      answer:
        "While US-based tools focus on broad frameworks like SOC 2, Anaya is engineered specifically for the Indian regulatory context. We natively support RBI Master Directions, SEBI Cyber Security circulars, and the DPDP Act. Furthermore, Anaya relies on deterministic 'compliance-as-code' checks rather than screenshot-based evidence collection.",
    },
    {
      question: "Does Anaya replace our external auditor?",
      answer:
        "No. Anaya functions as the 'preparation and surveillance layer'. We provide the deterministic evidence and continuous monitoring that allows your external auditor (e.g., BIG4 or CERT-IN empanelled auditors) to verify your posture in days instead of months. We make the audit cheaper, faster, and error-free.",
    },
    {
      question: "Can Anaya be deployed on-premise?",
      answer:
        "Yes. For enterprise banks and highly regulated entities with strict data sovereignty requirements, Anaya offers a self-hosted Enterprise edition that runs entirely within your VPC or physical data center. No data ever leaves your perimeter.",
    },
    {
      question: "What level of access does Anaya require?",
      answer:
        "Anaya follows a strict 'Least Privilege' architecture. We require Read-Only access to your cloud infrastructure (AWS/Azure/GCP) and SaaS tools. Our policy engine runs meta-data analysis and does not access customer PII or database contents.",
    },
    {
      question: "How often are regulatory frameworks updated?",
      answer:
        "Our legal-engineering team monitors RBI, SEBI, and IRDAI updates daily. New circulars are translated into technical policy definitions within 72 hours of publication and pushed to your policy engine automatically.",
    },
  ];

  return (
    <div className="bg-anaya-dark min-h-screen text-anaya-text font-sans">
      <Navbar />
      {/* Manifesto Header */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden border-b border-anaya-border">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-anaya-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-anaya-border bg-[#161821] text-xs font-mono text-anaya-muted mb-8">
            <span className="w-2 h-2 rounded-full bg-anaya-blue"></span>
            <span>The Anaya Manifesto</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-10">
            The era of "Screenshot Compliance" is over.
          </h1>
          <div className="prose prose-lg prose-invert text-anaya-muted max-w-3xl space-y-6 text-lg md:text-xl leading-relaxed">
            <p>
              For decades, compliance in India has been a theatre of security.
              Once a year, teams scramble to take screenshots, fill
              spreadsheets, and freeze deployments, just to pass an audit that
              is obsolete the moment it is signed.
            </p>
            <p>
              <span className="text-white font-medium">
                We believe compliance is an engineering problem, not a legal
                one.
              </span>
            </p>
            <p>
              Regulators are becoming technical. The RBI now demands real-time
              surveillance, exact data localization, and verifiable encryption
              standards. You cannot solve these engineering challenges with
              paperwork. You solve them with code.
            </p>
          </div>
        </div>
      </section>

      {/* The Shift Grid */}
      <section className="py-24 px-4 bg-[#0E0F13]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-12">
            The Paradigm Shift
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Old Way */}
            <div className="p-8 rounded-lg border border-red-900/20 bg-red-900/5 opacity-70">
              <h3 className="text-xl font-semibold text-red-200 mb-6 flex items-center gap-2">
                The Old Way
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-red-800 font-mono">01.</span>
                  <span className="text-gray-400">
                    Probabilistic sampling (checking 5% of items).
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-red-800 font-mono">02.</span>
                  <span className="text-gray-400">
                    Manual evidence collection (Screenshots).
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-red-800 font-mono">03.</span>
                  <span className="text-gray-400">
                    Point-in-time assessments (Once a year).
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-red-800 font-mono">04.</span>
                  <span className="text-gray-400">
                    Compliance slows down engineering velocity.
                  </span>
                </li>
              </ul>
            </div>

            {/* The Anaya Way */}
            <div className="p-8 rounded-lg border border-anaya-blue/30 bg-anaya-blue/5">
              <h3 className="text-xl font-semibold text-anaya-blue mb-6 flex items-center gap-2">
                The Anaya Way
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-anaya-blue font-mono">01.</span>
                  <span className="text-white">
                    Deterministic verification (100% of coverage).
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-anaya-blue font-mono">02.</span>
                  <span className="text-white">
                    API-driven collection (JSON artifacts).
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-anaya-blue font-mono">03.</span>
                  <span className="text-white">
                    Continuous monitoring (Every commit).
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-anaya-blue font-mono">04.</span>
                  <span className="text-white">
                    Compliance as a deployment gate.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 px-4 border-y border-anaya-border bg-[#161821]">
        <div className="max-w-4xl mx-auto text-center">
          <Globe className="w-12 h-12 text-anaya-blue mx-auto mb-8" />
          <h2 className="text-3xl font-semibold text-white mb-6">
            Built by Builders
          </h2>
          <p className="text-anaya-muted text-lg leading-relaxed mb-10">
            Anaya was founded in Bangalore by engineers from{" "}
            <span className="text-white">Zerodha</span>,{" "}
            <span className="text-white">Stripe</span>, and{" "}
            <span className="text-white">CRED</span>.
            <br />
            <br />
            We built Anaya because we were tired of explaining our Kubernetes
            architecture to auditors who didn't understand cloud primitives. We
            built the infrastructure we wished we had.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-anaya-dark">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-2 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-anaya-muted text-center mb-16">
            Technical details for engineering and risk teams.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border transition-all duration-300 rounded-lg overflow-hidden ${
                  openFaqIndex === index
                    ? "border-anaya-blue/50 bg-[#161821]"
                    : "border-anaya-border bg-[#0E0F13] hover:border-gray-600"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none group"
                >
                  <span
                    className={`font-medium text-lg transition-colors ${
                      openFaqIndex === index
                        ? "text-white"
                        : "text-gray-300 group-hover:text-white"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`transition-transform duration-300 text-anaya-blue ${
                      openFaqIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                <div
                  className={`px-6 text-anaya-muted text-base leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaqIndex === index
                      ? "max-h-96 pb-6 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-anaya-muted text-sm mb-4">
              Have more technical questions?
            </p>
            <button className="text-anaya-blue font-medium hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto">
              Read the Technical Whitepaper <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
