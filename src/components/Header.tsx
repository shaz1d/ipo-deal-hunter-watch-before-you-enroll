import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full flex justify-center items-center py-4 border-b border-white/5 bg-navy-900 sticky top-0 z-50 backdrop-blur-md bg-navy-900/90">
      <div className="w-auto h-16">
         <img src="/Images/ipo-deal-hunter-logo.png" alt="IPO Deal Hunter Logo" className="h-full object-contain hover:scale-105 transition-transform duration-300" />
      </div>
    </header>
  );
}
