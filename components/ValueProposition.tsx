import React from "react";

const ValueProposition: React.FC = () => {
  return (
    <section className="py-24 px-4 border-t border-anaya-border bg-anaya-dark">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
          Regulatory risk is an engineering problem.
        </h2>
        <p className="text-anaya-muted text-lg mb-16 max-w-2xl mx-auto">
          Manual audits fail to capture the state of modern, ephemeral
          infrastructure. Anaya treats compliance as code—versioned, tested, and
          deployed.
        </p>

        {/* Technical Diagram */}
        <div className="relative w-full max-w-4xl mx-auto h-64 bg-[#0E0F13] rounded-lg border border-anaya-border overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(#232533_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

          {/* Flow */}
          <div className="flex items-center gap-4 relative z-10 opacity-80">
            <div className="px-6 py-3 rounded border border-gray-700 bg-[#161821] text-xs font-mono text-gray-400">
              Github
            </div>
            <div className="w-8 h-[1px] bg-gray-600"></div>
            <div className="px-6 py-3 rounded border border-anaya-blue bg-anaya-blue/10 text-xs font-mono text-anaya-blue">
              Anaya Policy Check
            </div>
            <div className="w-8 h-[1px] bg-gray-600"></div>
            <div className="px-6 py-3 rounded border border-green-900 bg-green-900/10 text-xs font-mono text-green-500">
              Prod Deploy
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
