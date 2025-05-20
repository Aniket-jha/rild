import { Bell } from 'lucide-react';

export default function StayUpdated() {
//   const handleSubmit = () => {
//     alert('Thank you! You will be notified when our Coliving Asset Fund launches.');
//   };
  
  return (
    <div className="py-10 relative w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-50 overflow-hidden">
      {/* Large circle in bottom left */}
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-blue-50 border-4 border-white opacity-70"></div>
      
      {/* Large circle in top right */}
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-blue-50 border-4 border-white opacity-70"></div>
      
      <div className="max-w-xl w-full px-6 py-8 text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Don't Miss Out</h1>
        
        <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto">
          Be the first to know when our Coliving Asset Fund launches. Sign up for exclusive 
          updates and early access opportunities.
        </p>
        
        <div className="flex justify-center">
          <button 
            // onClick={handleSubmit}
            className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 flex items-center justify-center"
          >
            <Bell size={20} className="mr-2" /> Stay Updated
          </button>
        </div>
      </div>
    </div>
  );
}