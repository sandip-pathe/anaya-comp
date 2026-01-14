import React from "react";
import { ShieldCheck, FileCode, GitPullRequest, Database } from "lucide-react";

interface SmallFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureGrid: React.FC = () => {
  const smallFeatures: SmallFeature[] = [
    {
      icon: <FileCode size={24} />,
      title: "CI/CD Gates",
      description:
        "Block non-compliant deployments before they reach production environments.",
    },
    {
      icon: <GitPullRequest size={24} />,
      title: "SDLC Integration",
      description:
        "Embed compliance checks into GitHub/GitLab pull requests automatically.",
    },
    {
      icon: <Database size={24} />,
      title: "Data Localization",
      description:
        "Verify data residency requirements for Indian payments data (RBI circular 2018).",
    },
  ];

  return (
    <section className="py-24 px-4 bg-anaya-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight text-white">
            Verification Architecture
          </h2>
          <p className="text-anaya-muted text-base md:text-lg max-w-2xl mx-auto">
            A comprehensive suite of deterministic controls designed for
            high-velocity engineering teams in regulated sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {/* Main Large Card 1 - Infrastructure Verification */}
          <div className="lg:col-span-3 bg-anaya-card border border-anaya-border rounded-lg p-8 hover:border-anaya-blue/30 transition-colors group">
            <div className="h-48 mb-6 bg-[#0E0F13] rounded border border-anaya-border flex items-center justify-center overflow-hidden relative">
              {/* Mock UI - Terminal */}
              <div className="absolute inset-4 bg-[#0A0B0E] rounded border border-anaya-border p-4 font-mono text-xs text-gray-400 overflow-hidden">
                <div className="flex gap-1.5 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-900/50 border border-red-800"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-900/50 border border-yellow-800"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-900/50 border border-green-800"></div>
                </div>
                <div className="space-y-1">
                  <p>
                    <span className="text-blue-400">➜</span>{" "}
                    <span className="text-purple-400">~</span> anaya scan
                    --target=aws-prod
                  </p>
                  <p className="text-gray-500">Initializing policy engine...</p>
                  <p className="text-gray-500">
                    Loading RBI Master Directions (v2.4)...
                  </p>
                  <p className="mt-2 text-green-400">
                    ✓ Encryption at rest verified (AES-256)
                  </p>
                  <p className="text-green-400">
                    ✓ Audit logs retention &gt; 3 years verified
                  </p>
                  <p className="text-green-400">
                    ✓ VPC Peering restrictions verified
                  </p>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-medium mb-2 text-white">
              Infrastructure Verification
            </h3>
            <p className="text-anaya-muted text-sm leading-relaxed">
              Continuous scanning of cloud resources against RBI/SEBI technical
              mandates. Auto-remediation scripts generated for Terraform/Pulumi.
            </p>
          </div>

          {/* Main Large Card 2 - Evidence Collection */}
          <div className="lg:col-span-3 bg-anaya-card border border-anaya-border rounded-lg p-8 hover:border-anaya-blue/30 transition-colors group">
            <div className="h-48 mb-6 bg-[#0E0F13] rounded border border-anaya-border flex items-center justify-center relative overflow-hidden">
              <div className="w-full max-w-xs space-y-3 p-6">
                <div className="bg-[#1A1C25] border border-anaya-border rounded p-3 text-xs shadow-lg">
                  <div className="font-semibold text-gray-300 mb-1">
                    Control #442: Vendor Risk
                  </div>
                  <div className="text-gray-500 mb-2">
                    Requirement: Periodic assessment of critical service
                    providers.
                  </div>
                  <div className="flex items-center gap-2 text-green-400 bg-green-400/5 p-1.5 rounded border border-green-400/10">
                    <ShieldCheck size={12} />
                    <span>Evidence collected automatically</span>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-medium mb-2 text-white">
              Automated Evidence Collection
            </h3>
            <p className="text-anaya-muted text-sm leading-relaxed">
              Map technical evidence directly to control frameworks. Generate
              audit-ready artifacts without taking screenshots manually.
            </p>
          </div>

          {/* Small Feature Cards */}
          {smallFeatures.map((feature, index) => (
            <div
              key={index}
              className="lg:col-span-2 bg-anaya-card border border-anaya-border rounded-lg p-6 hover:border-anaya-blue/30 transition-colors"
            >
              <div className="mb-4 text-anaya-blue">{feature.icon}</div>
              <h3 className="text-base font-medium mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-anaya-muted text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
