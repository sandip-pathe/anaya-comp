import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0B0E] border-t border-anaya-border pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2 pr-8">
            <div className="flex items-center justify-center mb-2">
              <img src="/logo2.png" alt="Anaya Logo" width={100} height={100} />
            </div>

            <div className="mb-2 justify-center text-center">
              <h4 className="font-medium text-white mb-2 text-sm">
                Anaya Financial Solutions Pvt Ltd.
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed">
                WeWork, 1st Floor, 264-265, Dr Annie Besant Rd,
                <br />
                Worli, Mumbai, Maharashtra 400025
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-medium mb-5 text-xs uppercase tracking-wider text-gray-300">
              Platform
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-anaya-blue transition-colors">
                  Infrastructure Scan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-anaya-blue transition-colors">
                  Code Analysis
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-anaya-blue transition-colors">
                  Policy Engine
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-anaya-blue transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-5 text-xs uppercase tracking-wider text-gray-300">
              Frameworks
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a
                  href="https://rbi.org.in/Scripts/BS_ViewMasterDirections.aspx"
                  className="hover:text-anaya-blue transition-colors"
                >
                  RBI Master Directions
                </a>
              </li>
              <li>
                <a
                  href="https://www.sebi.gov.in/sebiweb/home/HomeAction.do?doListing=yes&sid=1&ssid=7&smid=0"
                  className="hover:text-anaya-blue transition-colors"
                >
                  SEBI Circulars
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-5 text-xs uppercase tracking-wider text-gray-300">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-anaya-blue transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-anaya-blue transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-anaya-blue transition-colors">
                  Security
                </a>
              </li>
              <li>
                <Link
                  to="/subscribe"
                  className="hover:text-anaya-blue transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-5 text-xs uppercase tracking-wider text-gray-300">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-anaya-blue transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-anaya-blue transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-anaya-blue transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-anaya-blue transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-anaya-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <span className="text-gray-600 text-xs">
              © 2026 Anaya. All rights reserved.
            </span>
            <div className="flex gap-6 text-xs text-gray-500">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
