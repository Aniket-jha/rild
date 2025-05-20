import React from 'react';
import { TrendingUp, Droplet, Settings } from 'lucide-react';

export default function InvestmentBenefits() {
  return (
    <div className="bg-slate-50 py-16 px-4 md:px-8 bg-[#F1F4FE] ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">Investment Benefits</h1>
        <p className="text-lg text-slate-700 mb-12">
          Enjoy passive income, diversification, and long-term growth
          made simple and secure with REILD.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-md transition-shadow duration-300">
            <div className="bg-[#EBEBEB] h-12 w-12 bg-slate-100 flex items-center justify-center rounded-md mb-6">
              <TrendingUp className="h-6 w-6 text-slate-800" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">High Rental Demand</h3>
            <p className="text-slate-700">
              Secure returns from professionally managed rental properties by Union
              Living, targeting prime urban locations with consistent demand.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-md transition-shadow duration-300">
            <div className="bg-[#EBEBEB] h-12 w-12 bg-slate-100 flex items-center justify-center rounded-md mb-6">
              <Droplet className="h-6 w-6 text-slate-800" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Diversification & Growth</h3>
            <p className="text-slate-700">
              Balance risk with a diversified portfolio across prime locations,
              benefiting from both rental income and property appreciation.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-md transition-shadow duration-300">
            <div className="bg-[#EBEBEB] h-12 w-12 bg-slate-100 flex items-center justify-center rounded-md mb-6">
              <Settings className="h-6 w-6 text-slate-800" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Hassle-Free Ownership</h3>
            <p className="text-slate-700">
              Maximize returns with minimal effort, thanks to Union Living's
              expertise in property management and tenant relations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}