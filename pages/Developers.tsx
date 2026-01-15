import React from "react";
import { Terminal, Copy, ChevronRight, Book, Box } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Developers: React.FC = () => {
  return (
    <div className="bg-anaya-dark min-h-screen text-anaya-text font-sans">
      <Navbar />
      {/* Hero */}
      <div className="border-b pt-32 border-anaya-border bg-[#0E0F13]">
        <div className="max-w-7xl mx-auto px-4 pb-16 flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-anaya-blue/10 border border-anaya-blue/20 text-anaya-blue text-xs font-mono mb-6">
              <Terminal size={12} />
              <span>v2.4.0 Stable</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Anaya Developer Platform
            </h1>
            <p className="text-anaya-muted text-lg max-w-xl">
              Programmatic access to compliance controls. Integrate verification
              into your CI/CD pipelines, runtime environments, and internal
              dashboards.
            </p>
            <div className="flex gap-4 mt-8">
              <button className="bg-anaya-blue text-white px-6 py-2.5 rounded font-medium text-sm hover:bg-anaya-bluehover transition-colors">
                Read the Docs
              </button>
              <button className="text-gray-300 px-6 py-2.5 rounded font-medium text-sm border border-anaya-border hover:text-white hover:border-gray-500 transition-colors">
                Get API Key
              </button>
            </div>
          </div>

          {/* Quickstart Code Block */}
          <div className="w-full max-w-md bg-[#161821] rounded-lg border border-anaya-border overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-2 bg-[#0E0F13] border-b border-anaya-border">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
              </div>
              <span className="text-xs text-gray-500 font-mono">bash</span>
            </div>
            <div className="p-6 font-mono text-xs text-gray-300 space-y-4">
              <div>
                <span className="text-gray-500"># Install the CLI</span>
                <br />
                <span className="text-anaya-blue">$</span> npm install -g
                @anaya/cli
              </div>
              <div>
                <span className="text-gray-500"># Initialize project</span>
                <br />
                <span className="text-anaya-blue">$</span> anaya init
                --framework=rbi-master
              </div>
              <div>
                <span className="text-gray-500"># Verify infrastructure</span>
                <br />
                <span className="text-anaya-blue">$</span> anaya verify .
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sidebar Nav */}
        <div className="hidden lg:block space-y-8">
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Getting Started
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="text-anaya-blue font-medium">
                  Introduction
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Authentication
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Quickstart
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Core Resources
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Controls
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Evidence
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Policies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Scans
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              SDKs
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Node.js
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Python
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Go
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Terraform Provider
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* SDK Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#161821] border border-anaya-border p-6 rounded hover:border-anaya-blue/30 transition-colors group cursor-pointer">
              <Box
                className="text-gray-400 mb-4 group-hover:text-anaya-blue transition-colors"
                size={24}
              />
              <h3 className="text-white font-medium mb-1">Node.js SDK</h3>
              <p className="text-xs text-gray-500">
                Server-side verification for JS backends.
              </p>
            </div>
            <div className="bg-[#161821] border border-anaya-border p-6 rounded hover:border-anaya-blue/30 transition-colors group cursor-pointer">
              <Terminal
                className="text-gray-400 mb-4 group-hover:text-anaya-blue transition-colors"
                size={24}
              />
              <h3 className="text-white font-medium mb-1">
                Terraform Provider
              </h3>
              <p className="text-xs text-gray-500">
                Enforce compliance at provisioning time.
              </p>
            </div>
            <div className="bg-[#161821] border border-anaya-border p-6 rounded hover:border-anaya-blue/30 transition-colors group cursor-pointer">
              <Book
                className="text-gray-400 mb-4 group-hover:text-anaya-blue transition-colors"
                size={24}
              />
              <h3 className="text-white font-medium mb-1">REST API</h3>
              <p className="text-xs text-gray-500">
                Direct integration with JSON responses.
              </p>
            </div>
          </div>

          {/* Code Example Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Create a Scan
            </h2>
            <p className="text-anaya-muted mb-6">
              Trigger an asynchronous infrastructure scan against a specific
              framework. The results will be delivered via webhook.
            </p>

            <div className="bg-[#161821] border border-anaya-border rounded-lg overflow-hidden">
              <div className="flex border-b border-anaya-border">
                <button className="px-6 py-2 text-xs font-medium text-white bg-[#0E0F13] border-r border-anaya-border">
                  Node.js
                </button>
                <button className="px-6 py-2 text-xs font-medium text-gray-500 hover:text-gray-300">
                  Python
                </button>
                <button className="px-6 py-2 text-xs font-medium text-gray-500 hover:text-gray-300">
                  Go
                </button>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="text-xs font-mono leading-relaxed text-gray-300">
                  <span className="text-purple-400">import</span> {"{"} Anaya{" "}
                  {"}"} <span className="text-purple-400">from</span>{" "}
                  <span className="text-green-400">'@anaya/sdk'</span>;
                  <span className="text-gray-500">
                    // Initialize the client
                  </span>
                  <span className="text-purple-400">const</span> client ={" "}
                  <span className="text-purple-400">new</span>{" "}
                  Anaya(process.env.ANAYA_API_KEY);
                  <span className="text-gray-500">// Trigger a scan</span>
                  <span className="text-purple-400">const</span> scan ={" "}
                  <span className="text-purple-400">await</span>{" "}
                  client.scans.create({"{"}
                  target:{" "}
                  <span className="text-green-400">'production-vpc'</span>,
                  frameworks: [
                  <span className="text-green-400">
                    'rbi-master-directions-it'
                  </span>
                  ], tags: {"{"}
                  env: <span className="text-green-400">'prod'</span>,
                  costCenter: <span className="text-green-400">'payments'</span>
                  {"}"}
                  {"}"}); console.log(
                  <span className="text-green-400">
                    `Scan started: ${"{"}scan.id{"}"}`
                  </span>
                  );
                </pre>
              </div>
            </div>
          </div>

          {/* Endpoints Table */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Core Endpoints
            </h2>
            <div className="overflow-hidden rounded border border-anaya-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#1A1C25] text-gray-400 border-b border-anaya-border">
                  <tr>
                    <th className="px-6 py-3 font-medium">Method</th>
                    <th className="px-6 py-3 font-medium">Endpoint</th>
                    <th className="px-6 py-3 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-anaya-border bg-[#0E0F13]">
                  <tr>
                    <td className="px-6 py-4">
                      <span className="text-green-400 bg-green-400/10 px-2 py-1 rounded text-xs font-mono">
                        POST
                      </span>
                    </td>
                    <td className="px-6 py-4 font-mono text-gray-300">
                      /v1/scans
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      Trigger a new infrastructure scan
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">
                      <span className="text-blue-400 bg-blue-400/10 px-2 py-1 rounded text-xs font-mono">
                        GET
                      </span>
                    </td>
                    <td className="px-6 py-4 font-mono text-gray-300">
                      /v1/scans/:id
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      Retrieve scan results and evidence
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">
                      <span className="text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded text-xs font-mono">
                        PUT
                      </span>
                    </td>
                    <td className="px-6 py-4 font-mono text-gray-300">
                      /v1/policies/:id
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      Update a custom control policy
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">
                      <span className="text-blue-400 bg-blue-400/10 px-2 py-1 rounded text-xs font-mono">
                        GET
                      </span>
                    </td>
                    <td className="px-6 py-4 font-mono text-gray-300">
                      /v1/evidence
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      List all collected audit artifacts
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Developers;
