import React from 'react';
import { WifiIcon, SparklesIcon, MapIcon, PhoneIcon } from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Free High-Speed Wi-Fi',
    description: 'Stay connected with complimentary high-speed internet access throughout our premises.',
    icon: WifiIcon,
  },
  {
    name: 'Housekeeping & Laundry',
    description: 'Enjoy a clean and comfortable stay with our daily housekeeping and laundry services.',
    icon: SparklesIcon,
  },
  {
    name: 'Tour & Travel Assistance',
    description: 'Explore the local attractions with ease. We offer tour and travel assistance to our guests.',
    icon: MapIcon,
  },
  {
    name: '24/7 Front Desk',
    description: 'Our front desk is available 24/7 to assist you with any needs or inquiries.',
    icon: PhoneIcon,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a range of services to make your stay comfortable, convenient, and memorable.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.name}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center h-16 w-16 bg-primary text-white rounded-full mx-auto mb-6">
                <service.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                {service.name}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
