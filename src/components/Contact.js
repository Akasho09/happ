import React from 'react';
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with us for bookings, inquiries, or any other information.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mt-6">
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start">
              <MapPinIcon className="h-8 w-8 text-primary mr-4" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900">Address</h4>
                <p className="text-gray-700">King Sukh Guest House, Near Baranti Lake, West Bengal</p>
              </div>
            </div>
            <div className="flex items-start">
              <EnvelopeIcon className="h-8 w-8 text-primary mr-4" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900">Email</h4>
                <a href="mailto:info@kingsukhguesthouse.com" className="text-secondary hover:text-primary">info@kingsukhguesthouse.com</a>
              </div>
            </div>
            <div className="flex items-start">
              <PhoneIcon className="h-8 w-8 text-primary mr-4" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900">Phone</h4>
                <a href="tel:+911234567890" className="text-secondary hover:text-primary">+91 123 456 7890</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
