
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-700 via-gray-650 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-5">
              <img
                src="/assets/large.jpg"
                alt="Serene Stay Guest House"
                className="h-14 w-14 rounded-full shadow-lg ring-2 ring-white/20 mr-4"
              />
              <div>
                <h3 className="text-2xl font-bold tracking-wide">Serene Stay Guest House</h3>
                <p className="text-gray-400 text-sm">Your Home Away From Home</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Experience the perfect blend of comfort, luxury, and hospitality in the heart of nature.
            </p>
            <div className="flex space-x-4">
              {[
                { href: "https://facebook.com/SereneStayguesthouse", img: "/assets/facebook.png", alt: "Facebook" },
                { href: "https://instagram.com/SereneStayguesthouse", img: "/assets/instagram.png", alt: "Instagram" },
                { href: "https://twitter.com/SereneStayguesthouse", img: "/assets/twitter.png", alt: "Twitter" },
                { href: "https://youtube.com/SereneStayguesthouse", img: "/assets/youtube.png", alt: "YouTube" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition hover:scale-110 hover:opacity-90"
                >
                  <img src={item.img} alt={item.alt} className="h-8 w-8" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 relative inline-block">
              Quick Links
              <span className="absolute left-0 -bottom-1 w-12 h-0.5 bg-yellow-400"></span>
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Rooms", "Gallery", "Contact"].map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-5 relative inline-block">
              Contact Info
              <span className="absolute left-0 -bottom-1 w-16 h-0.5 bg-yellow-400"></span>
            </h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>📍 Near Metro Station Jamia Nagar, New Delhi</p>
              <p>📞 +91 123 456 7890</p>
              <p>✉️ info@serenestayguesthouse.com</p>
            </div>
            <div className="mt-4 text-sm text-gray-300">
              <p>🕒 Check-in: <span className="font-semibold text-yellow-400">2:00 PM</span></p>
              <p>🕒 Check-out: <span className="font-semibold text-yellow-400">11:00 AM</span></p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-yellow-400">Serene Stay Guest House</span>. All rights reserved. | Designed with ❤️ for your comfort.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
