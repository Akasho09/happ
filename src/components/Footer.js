import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/assets/large.jpg" alt="King Sukh Guest House" className="h-12 w-12 rounded-full mr-3" />
              <div>
                <h3 className="text-xl font-bold">King Sukh Guest House</h3>
                <p className="text-gray-400 text-sm">Your Home Away From Home</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Experience the perfect blend of comfort, luxury, and hospitality in the heart of nature.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/kingsukhguesthouse" className="hover:opacity-75" target="_blank" rel="noopener noreferrer">
                <img src="/assets/facebook.png" alt="Facebook" className="h-8 w-8" />
              </a>
              <a href="https://instagram.com/kingsukhguesthouse" className="hover:opacity-75" target="_blank" rel="noopener noreferrer">
                <img src="/assets/instagram.png" alt="Instagram" className="h-8 w-8" />
              </a>
              <a href="https://twitter.com/kingsukhguesthouse" className="hover:opacity-75" target="_blank" rel="noopener noreferrer">
                <img src="/assets/twitter.png" alt="Twitter" className="h-8 w-8" />
              </a>
              <a href="https://youtube.com/kingsukhguesthouse" className="hover:opacity-75" target="_blank" rel="noopener noreferrer">
                <img src="/assets/youtube.png" alt="YouTube" className="h-8 w-8" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#rooms" className="text-gray-400 hover:text-white transition-colors">Rooms</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>Near Baranti Lake, West Bengal</p>
              <p>Phone: +91 123 456 7890</p>
              <p>Email: info@kingsukhguesthouse.com</p>
            </div>
            <div className="mt-4">
              <h5 className="text-sm font-semibold mb-2">Check-in: 2:00 PM</h5>
              <h5 className="text-sm font-semibold">Check-out: 11:00 AM</h5>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 King Sukh Guest House. All rights reserved. | Designed with ❤️ for your comfort.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
