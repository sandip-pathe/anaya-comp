import React from "react";
import { ArrowRight, Box, Layers, Building2 } from "lucide-react";

const DeploymentModels: React.FC = () => {
  const deploymentCards = [
    {
      title: "Fintech Startup",
      desc: "Rapid compliance for lending/payment apps.",
      icon: <Box className="text-anaya-blue" size={28} />,
      features: [
        "RBI Digital Lending Guidelines",
        "Data Localization Checks",
        "Basic SOC 2 Controls",
      ],
    },
    {
      title: "Growth Stage",
      desc: "For regulated entities applying for licenses.",
      icon: <Layers className="text-anaya-blue" size={28} />,
      features: [
        "NBFC / PA-PG License Support",
        "ISO 27001 Certification",
        "Vendor Risk Management",
      ],
    },
    {
      title: "Enterprise Bank",
      desc: "Custom risk engines for legacy institutions.",
      icon: <Building2 className="text-anaya-blue" size={28} />,
      features: [
        "On-premise deployment option",
        "Custom Control Frameworks",
        "Core Banking Integration",
      ],
    },
  ];

  return (
    <section className="bg-anaya-dark py-24 px-4 border-t border-anaya-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
            Deployment Models
          </h2>
          <p className="text-anaya-muted max-w-2xl mx-auto text-base">
            Scalable infrastructure for every stage of institutional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deploymentCards.map((card, i) => (
            <div
              key={i}
              className="bg-anaya-card rounded-lg p-8 border border-anaya-border hover:border-anaya-blue/40 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded bg-[#1A1C25] border border-anaya-border flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-medium mb-2 text-white">
                {card.title}
              </h3>
              <p className="text-anaya-muted mb-8 h-10 text-sm">{card.desc}</p>
              <ul className="space-y-3 mb-8">
                {card.features.map((f, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-sm font-medium text-gray-300"
                  >
                    <div className="mt-1 min-w-[14px] h-3.5 bg-anaya-blue text-white text-[9px] flex items-center justify-center rounded-[2px]">
                      ✓
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-transparent border border-anaya-border text-white py-2.5 rounded-[6px] text-sm font-medium flex items-center justify-center gap-2 group hover:bg-white/5 transition-colors">
                View Specs{" "}
                <ArrowRight
                  size={14}
                  className="text-anaya-muted group-hover:text-white transition-colors"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeploymentModels;
