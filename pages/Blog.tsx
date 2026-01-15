import React from "react";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog: React.FC = () => {
  const posts = [
    {
      title:
        "Deciphering RBI's Digital Lending Guidelines for System Architects",
      excerpt:
        "A technical breakdown of the data localization and audit trail requirements in the new DL guidelines. How to architect your AWS VPC to remain compliant.",
      date: "Oct 12, 2024",
      readTime: "8 min read",
      tag: "Engineering",
      featured: true,
    },
    {
      title: "Automating SEBI Cyber Security Circular 2024 with Terraform",
      excerpt:
        "Implementing the new SEBI mandates for stock brokers using Terraform sentinels and Anaya policy checks in your CI/CD pipeline.",
      date: "Sep 28, 2024",
      readTime: "12 min read",
      tag: "Tutorial",
    },
    {
      title: "Why we moved from probabilistic AI to deterministic rule engines",
      excerpt:
        "LLMs hallucinate. Compliance cannot. Why Anaya's core engine relies on formal verification methods instead of generative AI for audit proofs.",
      date: "Sep 15, 2024",
      readTime: "6 min read",
      tag: "Philosophy",
    },
    {
      title: "The end of the annual audit: Moving to continuous compliance",
      excerpt:
        "How real-time evidence collection changes the relationship between the CTO and the Chief Risk Officer.",
      date: "Aug 30, 2024",
      readTime: "5 min read",
      tag: "Strategy",
    },
    {
      title: "Implementing DPDP Act 2023 Consent Managers",
      excerpt:
        "Technical patterns for implementing the new consent manager architecture required by India's new data protection law.",
      date: "Aug 12, 2024",
      readTime: "10 min read",
      tag: "Engineering",
    },
  ];

  return (
    <div className="bg-anaya-dark min-h-screen text-anaya-text font-sans">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-16">
        {/* Header */}
        <div className="text-center mb-20 border-b border-anaya-border pb-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Engineering & Regulation
          </h1>
          <p className="text-anaya-muted text-lg max-w-2xl mx-auto">
            Deep dives into Indian financial regulations, infrastructure
            security, and compliance engineering.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-20">
          <div className="bg-[#161821] border border-anaya-border rounded-xl overflow-hidden hover:border-anaya-blue/30 transition-colors group cursor-pointer">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-auto bg-[#1A1C25] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-anaya-blue/10 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-anaya-blue text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                    FEATURED
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-mono">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} /> {posts[0].date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} /> {posts[0].readTime}
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 group-hover:text-anaya-blue transition-colors">
                  {posts[0].title}
                </h2>
                <p className="text-anaya-muted mb-6 leading-relaxed">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-2 text-anaya-blue font-medium text-sm">
                  Read Article <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <div
              key={index}
              className="bg-[#161821] border border-anaya-border rounded-lg p-6 hover:border-anaya-blue/30 transition-colors group flex flex-col cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-anaya-blue border border-anaya-blue/20 bg-anaya-blue/5 px-2 py-0.5 rounded">
                  {post.tag}
                </span>
                <span className="text-xs text-gray-600">{post.readTime}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-anaya-blue transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-anaya-muted leading-relaxed mb-6 flex-grow">
                {post.excerpt}
              </p>
              <div className="pt-4 border-t border-anaya-border flex items-center justify-between text-xs text-gray-500">
                <span>{post.date}</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-24 bg-[#1A1C25] border border-anaya-border rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Stay updated on RBI mandates
          </h3>
          <p className="text-anaya-muted mb-8 max-w-lg mx-auto">
            We monitor regulatory changes daily. Get a weekly engineering
            summary of new circulars and master directions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="engineering@company.com"
              className="bg-[#0E0F13] border border-anaya-border text-white px-4 py-3 rounded focus:outline-none focus:border-anaya-blue w-full"
            />
            <button className="bg-anaya-blue text-white px-6 py-3 rounded font-medium hover:bg-anaya-bluehover transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
