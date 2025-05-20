// pages/index.js
import Head from 'next/head';
import { Building, Home } from 'lucide-react';

export default function Investments() {
  return (
    <div className="bg-[#F1F4FE] lg:px-16 lg:py-12 px-6 py-8">
      <Head>
        <title>Tailored Real Estate Investments</title>
        <meta name="description" content="Find the perfect real estate investment for your needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 lg:mb-12">
          <div>
            <h1 className="text-3xl font-bold text-black">Tailored Real Estate</h1>
            <h2 className="text-3xl font-bold text-black">Investments for You</h2>
          </div>
          <button className="mt-4 md:mt-0 bg-gradient-to-r from-[#3ECF95] to-[#0068de] text-white te px-4 py-2 rounded-md font-medium">
            Explore Deals
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Deal by Deal Card */}
          <div className="bg-[#121936] shadow-lg rounded-lg p-8 text-white">
            <div className="flex items-center mb-6">
              <div className="bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center">
                <Building className="text-[#121936]" size={24} />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-1">Deal by Deal</h3>
            <p className="text-gray-300 text-sm mb-6">
              Handpick properties, invest smart, and maximize your returns.
            </p>
            
            <p className="text-gray-300 mb-4">Long Term Incomes</p>
            
            <div className="flex justify-between mb-8">
              <div>
                <p className="text-2xl font-bold">12-15%</p>
                <p className="text-sm text-gray-300">IRR</p>
              </div>
              <div>
                <p className="text-2xl font-bold">5+ Years</p>
                <p className="text-sm text-gray-300">Tenure</p>
              </div>
            </div>
            
            <div>
              <p className="text-gray-300">Low-Risk</p>
            </div>
          </div>
          
          {/* Co-livings Funds Card */}
          <div className="bg-[#121936] shadow-lg rounded-lg p-8 text-white">
            <div className="flex items-center mb-6">
              <div className="bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center">
                <Home className="text-[#121936]" size={24} />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-1">Co-livings Funds</h3>
            <p className="text-gray-300 text-sm mb-6">
              Invest in shared living spaces for reliable passive income and growth.
            </p>
            
            <p className="text-gray-300 mb-4">Passive Income</p>
            
            <div className="flex justify-between mb-8">
              <div>
                <p className="text-2xl font-bold">16-18%</p>
                <p className="text-sm text-gray-300">IRR</p>
              </div>
              <div>
                <p className="text-2xl font-bold">2-3 Years</p>
                <p className="text-sm text-gray-300">Tenure</p>
              </div>
            </div>
            
            <div>
              <p className="text-gray-300">Moderate Risk</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}