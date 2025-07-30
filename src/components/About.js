import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About <span className="text-primary">King Sukh Guest House</span>
            </motion.h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <motion.p 
                className="text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Nestled in the serene landscapes of West Bengal, King Sukh Guest House offers 
                an unparalleled experience of comfort and tranquility. Our guest house combines 
                traditional hospitality with modern amenities to create the perfect retreat 
                for travelers seeking peace and relaxation.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Established with a vision to provide guests with a home away from home, 
                we pride ourselves on our warm hospitality, authentic local cuisine, 
                and breathtaking views of the surrounding natural beauty.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Whether you're here for a weekend getaway, a family vacation, or a 
                peaceful retreat, King Sukh Guest House promises an unforgettable 
                experience that will leave you refreshed and rejuvenated.
              </motion.p>
            </div>
            
            {/* Features */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                <span className="text-gray-700">24/7 Customer Service</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                <span className="text-gray-700">Free WiFi</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                <span className="text-gray-700">Complimentary Breakfast</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                <span className="text-gray-700">Scenic Views</span>
              </div>
            </div>
          </motion.div>
          
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/assets/out.jpg" 
                alt="Guest House Exterior" 
                className="rounded-lg shadow-lg h-48 w-full object-cover"
              />
              <img 
                src="/assets/recep.jpg" 
                alt="Reception Area" 
                className="rounded-lg shadow-lg h-48 w-full object-cover mt-8"
              />
              <img 
                src="/assets/service.jpg" 
                alt="Service Area" 
                className="rounded-lg shadow-lg h-48 w-full object-cover -mt-8"
              />
              <img 
                src="/assets/flower.jpg" 
                alt="Garden View" 
                className="rounded-lg shadow-lg h-48 w-full object-cover"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent opacity-20 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary opacity-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
