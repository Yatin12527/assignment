const Footer = () => {
  return (
    <footer className="bg-[#0A1F1A] text-[#F6F4E9] py-16">
      <div className="w-full px-16">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-40 sm:gap-96 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/Shape.png" alt="Luxort Logo" className="w-12 h-12 " />
              <h3 className="font-cormorant text-3xl">
                <span className="italic">L</span>UXORT
              </h3>
            </div>
            <p className="text-sm leading-relaxed opacity-90">
              Luxort combines timeless elegance with modern luxury, offering
              unparalleled comfort and unforgettable experiences
            </p>
          </div>
          <div className="flex flex-row gap-12 sm:gap-x-45">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-medium mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/"
                    className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/events"
                    className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="/testimonials"
                    className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-medium mb-6">Social Media</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                  >
                    X
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#F6F4E9]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-75">
            © 2025 Luxort, All Right Reserved
          </p>
          <div className="flex gap-6">
            <a
              href="/terms"
              className="text-sm opacity-75 hover:opacity-100 transition-opacity"
            >
              Terms & Conditions
            </a>
            <a
              href="/privacy"
              className="text-sm opacity-75 hover:opacity-100 transition-opacity"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
