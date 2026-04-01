export default function Footer() {
  return (
    <footer className="w-full bg-[#0a1520] text-gray-500 py-12 px-4 border-t border-white/5 text-center flex flex-col items-center flex-shrink-0">
      <div className="mb-6 h-12 md:h-16 opacity-80 hover:opacity-100 transition-opacity">
        <img src="/Images/ipo-deal-hunter-logo.png" alt="IPO Deal Hunter" className="h-full object-contain" />
      </div>

      <p className="mb-4 text-sm font-light">IPO Deal Hunter © 2026 All Rights Reserved</p>

      <div className="flex gap-4 text-xs tracking-wider uppercase mb-8">
        <a href="#" className="hover:text-accent transition-colors">dealdigger.co</a>
        <span>|</span>
        <a href="#" className="hover:text-accent transition-colors">Terms & Conditions</a>
      </div>

      <div className="max-w-4xl text-xs space-y-4 text-gray-600 font-light text-justify md:text-center leading-relaxed">
        <p>DISCLAIMER: This site is not a part of the Facebook™ website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook™ in any way. Facebook™ is a trademark of Facebook, Inc.</p>
        <p>The Angel Advantage is an educational resource designed to help investors understand the opportunities and strategies involved in early-stage private investing. Please note: Investing in startups and private companies carries inherent risks, and past performance is not indicative of future results.</p>
        <p>IPODealHunter makes no guarantees about your ability to earn returns, find successful deals, or achieve financial outcomes using the ideas, strategies, or tools provided. This content is for educational and informational purposes only and should not be considered investment, legal, financial, or tax advice.</p>
        <p>Any earnings examples or results shared are for illustration purposes only and are not promises of what you can or will achieve. Always do your own due diligence and consult licensed financial or legal professionals before making investment decisions.</p>
        <p>By using this site and accessing our materials, you accept full responsibility for your actions, decisions, and outcomes, and agree not to hold us liable in any way.</p>
      </div>

      <div className="flex gap-4 text-xs tracking-widest uppercase mt-8 border-t border-white/5 pt-8 w-full justify-center">
        <a href="#" className="hover:text-accent transition-colors">Legal Notice</a>
        <span>-</span>
        <a href="#" className="hover:text-accent transition-colors">Support</a>
        <span>-</span>
        <a href="#" className="hover:text-accent transition-colors">Privacy</a>
      </div>
    </footer>
  );
}
