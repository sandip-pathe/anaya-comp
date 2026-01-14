import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog: React.FC = () => {
  return (
    <div className="bg-anaya-dark min-h-screen text-anaya-text font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Blog & Articles
          </h1>
          <p className="text-xl text-anaya-text max-w-2xl">
            Insights on compliance automation, regulatory technology, and the
            future of fintech in India.
          </p>
          <div className="h-1 w-24 bg-anaya-blue mt-8"></div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Blog Post 1 */}
          <article className="bg-[#0B0E14] rounded-xl p-8 md:p-12 border border-anaya-blue/10 hover:border-anaya-blue/30 transition-all">
            <div className="flex items-center gap-6 text-sm text-anaya-text/70 mb-6">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                January 15, 2026
              </span>
              <span className="flex items-center gap-2">
                <User size={16} />
                Anaya Team
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Anaya Compliance: Why Indian Fintechs Need Automated Regulatory
              Detection
            </h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-2xl font-semibold text-white mt-8">
                The Compliance Crisis Facing Indian Fintech
              </h3>
              <p className="text-anaya-text leading-relaxed">
                Indian fintech companies are caught in a compliance trap. They
                spend ₹90 lakh to ₹3.2 crore annually on compliance teams and
                audits, yet 40-60% of violations are still discovered after RBI
                enforcement, not before.
              </p>
              <p className="text-anaya-text leading-relaxed">
                The numbers tell a stark story: RBI took 353 enforcement actions
                and imposed ₹54.78 crore in penalties in FY 2024-25, with
                average fines ranging from ₹1.5 to ₹5 crore for serious
                violations. The Paytm Payments Bank freeze in February 2024
                showed that even billion-dollar companies aren't
                immune—regulatory violations can have material business impact.
              </p>

              <h3 className="text-2xl font-semibold text-white mt-8">
                Why Traditional Compliance Fails
              </h3>
              <p className="text-anaya-text leading-relaxed">
                Compliance today lives in PDFs, spreadsheets, and quarterly
                audits. Mid-market fintechs rely on manual processes: compliance
                officers tracking spreadsheets, quarterly reviews, and reactive
                fixes after violations surface.
              </p>
              <p className="text-anaya-text leading-relaxed">
                This approach breaks down for three reasons:
              </p>

              <div className="bg-anaya-dark rounded-lg p-6 my-6 border-l-4 border-anaya-blue">
                <h4 className="text-xl font-semibold text-white mb-3">
                  1. Regulatory velocity is accelerating
                </h4>
                <p className="text-anaya-text leading-relaxed">
                  RBI is shifting from periodic audits to continuous,
                  tech-driven supervision. The April 1, 2026 RBI authentication
                  framework deadline requires all digital payment transactions
                  to implement dynamic 2FA, risk-based authentication, and
                  interoperability across UPI, NEFT, RTGS, and card networks.
                  Fintechs must prove ongoing compliance, not submit static
                  quarterly reports.
                </p>
              </div>

              <div className="bg-anaya-dark rounded-lg p-6 my-6 border-l-4 border-anaya-blue">
                <h4 className="text-xl font-semibold text-white mb-3">
                  2. Existing tools don't work for India
                </h4>
                <p className="text-anaya-text leading-relaxed">
                  Global compliance platforms like Harvey AI, Vanta, and Drata
                  are built for US regulations (SOC2, HIPAA, ISO). They
                  completely miss Indian regulatory chaos—RBI and SEBI documents
                  that mix legal language, circulars, and operational guidance
                  in unstructured formats. Generic LLMs hallucinate or miss
                  critical nuances, creating costly false positives and false
                  negatives.
                </p>
              </div>

              <div className="bg-anaya-dark rounded-lg p-6 my-6 border-l-4 border-anaya-blue">
                <h4 className="text-xl font-semibold text-white mb-3">
                  3. Manual compliance doesn't scale
                </h4>
                <p className="text-anaya-text leading-relaxed">
                  As fintech engineering teams grow from 30 to 200+ developers,
                  manual compliance tracking becomes exponentially harder. Each
                  code commit, API integration, and deployment introduces new
                  regulatory risk—but compliance officers can't review every
                  change in real-time.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-white mt-8">
                The Anaya Approach: Compliance in CI/CD
              </h3>
              <p className="text-anaya-text leading-relaxed">
                Anaya treats compliance like code quality. Just as you run
                automated tests before deploying code, Anaya runs automated
                regulatory checks before code reaches production.
              </p>
              <p className="text-anaya-text leading-relaxed">
                Our platform automatically maps RBI and SEBI requirements to
                technical patterns in your codebase—2FA implementation,
                encryption standards, data handling, consent tracking, audit
                trail generation. When a developer commits code that violates a
                regulatory requirement, they get immediate feedback with a
                citation to the exact RBI circular or SEBI guideline.
              </p>

              <p className="text-anaya-text leading-relaxed">
                This approach delivers three critical benefits:
              </p>
              <ul className="list-disc list-inside space-y-2 text-anaya-text ml-4">
                <li>
                  <strong className="text-white">Speed:</strong> Violations are
                  caught in minutes instead of weeks or months
                </li>
                <li>
                  <strong className="text-white">Accuracy:</strong> Custom NLP
                  trained on Indian legal documents achieves 87% accuracy on
                  violation detection
                </li>
                <li>
                  <strong className="text-white">Cost:</strong> 10-100x cheaper
                  than hiring compliance officers or engaging consulting firms
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mt-8">
                Built for Indian Fintech Reality
              </h3>
              <p className="text-anaya-text leading-relaxed">
                Anaya is India-native, not a localized version of a US tool.
                We're purpose-built for the regulatory environment that Indian
                fintechs actually face:
              </p>
              <ul className="list-disc list-inside space-y-2 text-anaya-text ml-4">
                <li>
                  RBI authentication frameworks and digital payment guidelines
                </li>
                <li>
                  Digital lending regulations with strict underwriting and audit
                  trail requirements
                </li>
                <li>SEBI wealth management and investment compliance</li>
                <li>State-level regulatory variations and SRO reporting</li>
              </ul>
              <p className="text-anaya-text leading-relaxed mt-4">
                With the April 2026 RBI deadline creating peak urgency for
                compliance automation, the window for manual processes is
                closing. Indian fintech has outgrown spreadsheets.
              </p>
            </div>
          </article>

          {/* Blog Post 2 */}
          <article className="bg-[#0B0E14] rounded-xl p-8 md:p-12 border border-anaya-blue/10 hover:border-anaya-blue/30 transition-all">
            <div className="flex items-center gap-6 text-sm text-anaya-text/70 mb-6">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                January 15, 2026
              </span>
              <span className="flex items-center gap-2">
                <User size={16} />
                Anaya Team
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              How Anaya Fintech Compliance Works: From RBI Documents to
              Production Code Scanning
            </h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-2xl font-semibold text-white mt-8">
                The Technical Challenge of Indian Fintech Compliance
              </h3>
              <p className="text-anaya-text leading-relaxed">
                Building automated compliance for Indian fintech isn't just
                about plugging in an LLM. Indian regulatory documents present
                unique technical challenges that break generic AI solutions.
              </p>
              <p className="text-anaya-text leading-relaxed">
                RBI and SEBI documents mix Hindi-English regulatory language,
                legal jargon, and operational guidance across PDFs, circulars,
                and master directions. There's no labeled training data for RBI
                compliance, no standardized format for SEBI guidelines, and no
                existing framework for mapping regulatory text to code patterns.
              </p>
              <p className="text-anaya-text leading-relaxed">
                When we tested GPT-4 on Indian legal documents, it achieved only
                34% accuracy—hallucinating requirements, missing critical
                nuances, and generating false positives that would cost fintech
                teams time and trust.
              </p>

              <h3 className="text-2xl font-semibold text-white mt-8">
                Building Compliance Infrastructure from Scratch
              </h3>
              <p className="text-anaya-text leading-relaxed">
                Anaya solves this through a custom three-layer architecture
                designed specifically for Indian regulatory complexity:
              </p>

              <div className="bg-anaya-dark rounded-lg p-6 my-6 border-l-4 border-anaya-blue">
                <h4 className="text-xl font-semibold text-white mb-3">
                  Layer 1: Regulatory Ingestion
                </h4>
                <p className="text-anaya-text leading-relaxed">
                  We built a custom NLP pipeline trained on 50+ RBI and SEBI
                  documents. Our system handles bilingual preprocessing
                  (Hinglish-native, not adapted from English) and extracts
                  structured obligations: what must exist in your code, what
                  must not happen, what triggers audit requirements.
                </p>
                <p className="text-anaya-text leading-relaxed mt-3">
                  This isn't document summarization—it's regulatory parsing that
                  converts unstructured legal text into machine-readable
                  compliance rules. Each rule is verified against source
                  documents and maintained as RBI and SEBI publish updates.
                </p>
              </div>

              <div className="bg-anaya-dark rounded-lg p-6 my-6 border-l-4 border-anaya-blue">
                <h4 className="text-xl font-semibold text-white mb-3">
                  Layer 2: Code Vulnerability Scanning
                </h4>
                <p className="text-anaya-text leading-relaxed">
                  Regulatory rules are mapped to technical signals in your
                  codebase. Anaya integrates with GitHub and GitLab webhooks to
                  scan code for:
                </p>
                <ul className="list-disc list-inside space-y-1 text-anaya-text ml-4 mt-3">
                  <li>
                    Payment API integrations and authentication implementations
                  </li>
                  <li>2FA frameworks and encryption standards</li>
                  <li>Lending logic and interest rate calculations</li>
                  <li>Data handling and consent tracking mechanisms</li>
                  <li>Audit trail generation and compliance logging</li>
                </ul>
                <p className="text-anaya-text leading-relaxed mt-3">
                  This happens continuously during development—not quarterly,
                  not after deployment, but on every commit.
                </p>
              </div>

              <div className="bg-anaya-dark rounded-lg p-6 my-6 border-l-4 border-anaya-blue">
                <h4 className="text-xl font-semibold text-white mb-3">
                  Layer 3: Citation-First Verification
                </h4>
                <p className="text-anaya-text leading-relaxed">
                  Every compliance flag includes a direct citation to the exact
                  regulatory source text. If Anaya flags a 2FA violation, the
                  developer sees the specific RBI authentication framework
                  requirement, the affected code pattern, and recommended
                  fixes—all in under 30 seconds.
                </p>
                <p className="text-anaya-text leading-relaxed mt-3">
                  This design principle eliminates black-box AI decisions.
                  Developers trust the system because they can verify every flag
                  independently.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-white mt-8">
                Real-World Performance
              </h3>
              <p className="text-anaya-text leading-relaxed">
                After 90 days of development and testing across 127,000 lines of
                code in 12 repositories, Anaya achieves 87% accuracy on Indian
                regulatory violation detection—2.5x better than baseline GPT-4.
              </p>
              <p className="text-anaya-text leading-relaxed">
                The system has been validated against:
              </p>
              <ul className="list-disc list-inside space-y-2 text-anaya-text ml-4">
                <li>
                  RBI digital payment guidelines and authentication frameworks
                </li>
                <li>
                  Digital lending regulations with underwriting transparency
                  requirements
                </li>
                <li>SEBI wealth management compliance for robo-advisors</li>
                <li>
                  Audit trail requirements for SOC 2 and regulatory audits
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mt-8">
                Why This Matters for Indian Fintech
              </h3>
              <p className="text-anaya-text leading-relaxed">
                The RBI enforcement pattern is clear: 353 penalty actions and
                ₹54.78 crore in fines in FY 2024-25, with enforcement shifting
                from onsite audits to real-time automated monitoring.
              </p>
              <p className="text-anaya-text leading-relaxed">
                Fintech companies need automated compliance detection that works
                during development, integrates with existing workflows, and
                understands Indian regulatory nuance. That's exactly what Anaya
                delivers.
              </p>
              <p className="text-anaya-text leading-relaxed">
                For engineering-led fintech teams of 30-200 people, this means
                compliance violations are caught before they reach production,
                before they impact customers, and before RBI enforcement
                actions.
              </p>
            </div>
          </article>

          {/* CTA Section */}
          <div className="text-center py-12">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Automate Your Compliance?
            </h3>
            <Link
              to="/subscribe"
              className="inline-flex items-center gap-2 px-8 py-4 bg-anaya-blue text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all"
            >
              Get Early Access
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
