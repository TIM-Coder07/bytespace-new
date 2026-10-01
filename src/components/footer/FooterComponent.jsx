export default function FooterComponent() {
  return (
    <footer className="bg-gradient-to-tr from-[#e3f6f5] via-[#faffd8] to-[#edf0fc] py-16 px-6 md:px-16 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Newsletter & Link Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
          
          {/* Left Column: Logo & Newsletter */}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#ccff00] rounded-lg flex items-center justify-center font-bold text-gray-900">
                <svg className="w-5 h-5 fill-current text-gray-900" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">ByteSpace</span>
            </div>

            {/* Newsletter Text */}
            <p className="text-sm text-gray-600 max-w-sm">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Input & Search Button */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full sm:w-auto flex-1 bg-white border border-gray-200 rounded-full py-3 px-5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm"
              />
              <button className="w-full sm:w-auto bg-[#ccff00] hover:bg-[#b8ef00] text-gray-900 font-semibold px-8 py-3 rounded-full text-sm shadow-sm transition-colors cursor-pointer">
                Search
              </button>
            </div>

            {/* Privacy Policy Disclaimer */}
            <p className="text-xs text-gray-500 max-w-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns: Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            
            {/* Column 1 */}
            <div className="space-y-3">
              <h4 className="font-bold text-gray-900 mb-4">Featured Courses</h4>
              <p className="text-gray-600 hover:text-gray-900 cursor-pointer">Featured Categories</p>
              <p className="text-gray-600 hover:text-gray-900 cursor-pointer">Business</p>
              <p className="text-gray-600 hover:text-gray-900 cursor-pointer">IT</p>
              <p className="text-gray-600 hover:text-gray-900 cursor-pointer">Design</p>
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <h4 className="font-bold text-gray-900 mb-4">Development</h4>
              <p className="text-gray-600 hover:text-gray-900 cursor-pointer">Marketing</p>
              <p className="text-gray-600 hover:text-gray-900 cursor-pointer">Photography</p>
              <p className="text-gray-600 hover:text-gray-900 cursor-pointer">Finance</p>
              <p className="text-gray-600 hover:text-gray-900 cursor-pointer">Sport</p>
            </div>

            {/* Column 3 */}
            <div className="space-y-3 col-span-2 sm:col-span-1">
              <h4 className="font-bold text-gray-900 mb-4">Become a Creator</h4>
              <p className="text-gray-600 hover:text-gray-900 cursor-pointer">Affiliate Program</p>
              <p className="text-gray-600 hover:text-gray-900 cursor-pointer">Contact</p>
              <p className="text-gray-600 hover:text-gray-900 cursor-pointer">Help</p>
              <p className="text-gray-600 hover:text-gray-900 cursor-pointer">About</p>
            </div>

          </div>

        </div>

        {/* Divider */}
        <hr className="border-gray-300/60" />

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-gray-800 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-800 cursor-pointer">Terms of Service</span>
            <span className="hover:text-gray-800 cursor-pointer">Cookies Settings</span>
          </div>
        </div>

      </div>
    </footer>
  );
}