import { motion } from "framer-motion";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  const infoItems = [
    {
      icon: <MapPinIcon className="h-8 w-8 text-primary" />,
      title: "Address",
      content:
        "Serene Stay Guest House, Near Metro Station Jamia Nagar, New Delhi.",
    },
    {
      icon: <EnvelopeIcon className="h-8 w-8 text-primary" />,
      title: "Email",
      content: (
        <a
          href="mailto:info@serenestayguesthouse.com"
          className="text-secondary hover:text-primary transition-colors"
        >
          info@serenestayguesthouse.com
        </a>
      ),
    },
    {
      icon: <PhoneIcon className="h-8 w-8 text-primary" />,
      title: "Phone",
      content: (
        <a
          href="tel:+911234567890"
          className="text-secondary hover:text-primary transition-colors"
        >
          +91 123 456 7890
        </a>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-primary/10 via-white to-secondary/10 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We’d love to hear from you! Whether it’s a booking, inquiry, or
            feedback — we’re here for you.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="backdrop-blur-lg bg-white/80 p-8 rounded-2xl shadow-2xl border border-white/50"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/70 focus:outline-none focus:ring-4 focus:ring-primary/30 transition"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/70 focus:outline-none focus:ring-4 focus:ring-primary/30 transition"
                />
              </div>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/70 focus:outline-none focus:ring-4 focus:ring-primary/30 transition"
              ></textarea>
              <div className="text-center">
                <motion.button
                  type="submit"
                  className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105"
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {infoItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-5 rounded-xl hover:bg-white/60 transition backdrop-blur-lg border border-white/50 shadow-md"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-gray-700">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
