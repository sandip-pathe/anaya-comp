import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About: React.FC = () => {
  return (
    <div className="bg-anaya-dark min-h-screen text-anaya-text font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Anaya
          </h1>
          <div className="h-1 w-24 bg-anaya-blue mb-12"></div>
        </div>
      </section>

      {/* About Content */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-anaya-text leading-relaxed">
              Anaya is developer-integrated compliance infrastructure built
              specifically for Indian fintech companies. We turn RBI and SEBI
              regulations into machine-readable rules that automatically scan
              production code and systems, catching violations before audits or
              enforcement actions.
            </p>

            <p className="text-lg text-anaya-text leading-relaxed mt-6">
              Traditional compliance happens in spreadsheets and quarterly
              audits—violations are discovered after RBI enforcement, not
              before. Anaya changes that by embedding compliance checks where
              bugs are caught: in your CI/CD pipeline.
            </p>

            <p className="text-lg text-anaya-text leading-relaxed mt-6">
              Our platform solves a critical problem: Indian fintech companies
              waste 6-10% of operating costs on manual compliance, yet RBI
              discovered 353 violations in 2024-25 across regulated
              entities—most caught too late. With RBI shifting from annual
              audits to real-time offsite supervision, continuous compliance is
              no longer optional.
            </p>

            <p className="text-lg text-anaya-text leading-relaxed mt-6">
              Built by a technical founder who shipped the MVP in 90 days, Anaya
              serves VC-backed and growth-stage fintechs with engineering teams
              of 30-200 people. We're focused on one mission: making compliance
              unavoidable, automatic, and verifiable.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-[#0B0E14]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-24 bg-anaya-blue mb-12"></div>

          <div className="space-y-12">
            {/* FAQ 1 */}
            <div className="border-l-4 border-anaya-blue pl-6">
              <h3 className="text-2xl font-semibold text-white mb-4">
                What is Anaya?
              </h3>
              <div className="space-y-4 text-anaya-text">
                <p className="leading-relaxed">
                  Anaya is compliance infrastructure for Indian fintech
                  companies that integrates directly into your development
                  workflow. Instead of relying on manual compliance checks,
                  quarterly audits, or expensive consultants, Anaya
                  automatically scans your code and systems for RBI and SEBI
                  regulatory violations in real-time.
                </p>
                <p className="leading-relaxed">
                  Think of it as automated compliance detection that runs where
                  your bug detection runs—in CI/CD pipelines—catching violations
                  during software development, not after customer impact or
                  regulatory enforcement.
                </p>
                <p className="leading-relaxed">
                  We're built specifically for the Indian regulatory
                  environment, where regulations are unstructured, frequently
                  updated, and mix legal language with operational guidance.
                  Global compliance tools like Vanta and Drata focus on SOC2 and
                  HIPAA, completely missing Indian regulatory requirements.
                </p>
                <p className="leading-relaxed">
                  Anaya serves mid-market fintechs—the segment caught between
                  spreadsheets and enterprise-only regtech vendors.
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="border-l-4 border-anaya-blue pl-6">
              <h3 className="text-2xl font-semibold text-white mb-4">
                How does Anaya work?
              </h3>
              <div className="space-y-4 text-anaya-text">
                <p className="leading-relaxed">
                  Anaya operates as a three-layer detection system integrated
                  into your existing development infrastructure:
                </p>

                <div className="mt-6">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Layer 1: Regulatory Parser
                  </h4>
                  <p className="leading-relaxed">
                    We ingest RBI and SEBI documents (PDFs, circulars, master
                    directions) and extract regulatory requirements into
                    structured, machine-readable rules. Our custom NLP pipeline
                    is trained on 50+ RBI/SEBI documents and achieves 87%
                    accuracy, compared to 34% with baseline GPT-4 on Indian
                    legal documents.
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Layer 2: CI/CD Integration
                  </h4>
                  <p className="leading-relaxed">
                    These regulatory rules are mapped to technical patterns in
                    your code—payment API integrations, authentication
                    implementations, lending logic, data handling, and consent
                    tracking. Anaya scans every commit for violations through
                    GitHub/GitLab webhooks, providing continuous compliance
                    monitoring.
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Layer 3: Citation Engine
                  </h4>
                  <p className="leading-relaxed">
                    Every compliance flag links directly back to the exact
                    regulatory source text. If a violation is flagged,
                    developers can see why in under 30 seconds—no black-box
                    answers. This citation-first approach prevents false
                    positives and builds trust in the system.
                  </p>
                </div>

                <div className="mt-6 p-6 bg-anaya-dark rounded-lg border border-anaya-blue/20">
                  <p className="text-white font-semibold mb-2">Output:</p>
                  <p className="leading-relaxed">
                    Real-time alerts during development, weekly compliance
                    reports, and quarterly audit-ready evidence with complete
                    audit trails of code changes, reviews, and deployment logs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              to="/subscribe"
              className="inline-block px-8 py-4 bg-anaya-blue text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all"
            >
              Get Early Access
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
