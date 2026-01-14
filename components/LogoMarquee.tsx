import React from 'react';

const LogoMarquee: React.FC = () => {
  const companies = [
    "Zerodha", "HDFC Bank", "Razorpay", "CRED", "Groww", "Pine Labs", "PhonePe", "ICICI Bank", "Slice", "Jupiter"
  ];

  return (
    <div className="w-full py-10 border-t border-b border-anaya-border bg-anaya-dark overflow-hidden relative">
      <div className="text-center text-[10px] uppercase tracking-widest text-gray-600 mb-6 font-medium">Trusted by Engineering Teams at</div>
      
      {/* Gradient fade overlay */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-anaya-dark to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-anaya-dark to-transparent z-10"></div>

      <div className="flex w-full">
        <div className="flex animate-marquee whitespace-nowrap items-center gap-16 px-8">
          {[...companies, ...companies, ...companies].map((company, index) => (
            <span key={index} className="text-lg font-semibold text-gray-500 uppercase tracking-widest opacity-40 hover:opacity-70 transition-opacity">
              {company}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;