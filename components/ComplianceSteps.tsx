import React, { useState } from 'react';
import { Check, ArrowRight, Settings } from 'lucide-react';

const ComplianceSteps: React.FC = () => {
  const [frameworks, setFrameworks] = useState([
    { id: 'rbi', name: 'RBI Master Directions', checked: true },
    { id: 'sebi', name: 'SEBI Cyber Security', checked: false },
    { id: 'soc2', name: 'SOC 2 Type II', checked: true },
    { id: 'iso27001', name: 'ISO 27001:2022', checked: false },
    { id: 'pci', name: 'PCI-DSS v4.0', checked: false },
    { id: 'irdai', name: 'IRDAI Guidelines', checked: false },
    { id: 'dpdp', name: 'DPDP Act 2023', checked: false },
  ]);

  const toggleFramework = (id: string) => {
    setFrameworks(frameworks.map(f => 
      f.id === id ? { ...f, checked: !f.checked } : f
    ));
  };

  return (
    <section className="py-24 px-4 bg-anaya-dark border-t border-anaya-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight text-white">
            Configure Regulatory Frameworks
          </h2>
          <p className="text-anaya-muted text-lg max-w-2xl mx-auto">
            Select the applicable regulatory bodies. Anaya's engine automatically maps relevant controls to your infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Step 1 */}
          <div className="bg-anaya-card border border-anaya-border rounded-lg p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 rounded bg-anaya-blue/10 text-anaya-blue flex items-center justify-center text-xs font-mono font-bold">01</div>
                <h3 className="text-lg font-medium text-white">Select Standards</h3>
            </div>
            <div className="flex flex-col gap-2">
              {frameworks.map((fw) => (
                <button
                  key={fw.id}
                  onClick={() => toggleFramework(fw.id)}
                  className={`px-4 py-3 rounded text-sm font-medium transition-all text-left flex justify-between items-center group ${
                    fw.checked 
                      ? 'bg-anaya-blue text-white border-transparent' 
                      : 'bg-[#0E0F13] text-gray-400 border border-anaya-border hover:border-gray-600'
                  }`}
                >
                  {fw.name}
                  {fw.checked && <Check size={14} />}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-anaya-card border border-anaya-border rounded-lg p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-anaya-blue/5 to-transparent"></div>
            <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 rounded bg-anaya-blue/10 text-anaya-blue flex items-center justify-center text-xs font-mono font-bold">02</div>
                <h3 className="text-lg font-medium text-white">Integration Scope</h3>
            </div>
            <div className="space-y-4">
              {[
                "AWS / GCP / Azure",
                "GitHub / GitLab",
                "Linear / Jira",
                "Okta / Google Workspace",
                "Datadog / Prometheus"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-1">
                  <div className="w-4 h-4 rounded border border-anaya-border bg-[#0E0F13] flex items-center justify-center">
                    <div className="w-2 h-2 bg-anaya-blue rounded-[1px]"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-300">{item}</span>
                </div>
              ))}
              
              <div className="pt-6 mt-2">
                 <p className="text-xs text-anaya-muted leading-relaxed">
                    Connectors are read-only by default. Least privilege access required for evidence collection.
                 </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#1A1C25] border border-anaya-border rounded-lg p-8 flex flex-col justify-between relative overflow-hidden group">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-anaya-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div>
                 <div className="flex items-center gap-3 mb-6">
                    <div className="w-6 h-6 rounded bg-anaya-blue text-white flex items-center justify-center text-xs font-mono font-bold">03</div>
                    <h3 className="text-lg font-medium text-white">Generate Program</h3>
                </div>
                <p className="text-anaya-muted text-sm mb-8 leading-relaxed">
                  The engine will generate a Terraform plan for missing controls and a remediation roadmap for existing violations.
                </p>
            </div>

            <button className="w-full bg-anaya-blue text-white font-medium py-3 rounded-[6px] flex items-center justify-center gap-2 transition-all hover:bg-anaya-bluehover shadow-lg shadow-blue-900/10 z-10 text-sm">
              Initialize Configuration
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ComplianceSteps;