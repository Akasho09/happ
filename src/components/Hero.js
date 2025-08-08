import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/assets/header.jpg)',
          filter: 'brightness(0.85)',
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Welcome to{' '}
          <span className="text-[#D4AF37] drop-shadow-md">Serene Stay</span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl mb-8 font-light italic tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Guest House & Retreat
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Experience the perfect blend of comfort, luxury, and hospitality in
          the heart of nature. Your serene getaway awaits.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.a
            href="#rooms"
            className="bg-[#D4AF37] hover:bg-[#c19e2f] text-black px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Stay
          </motion.a>

          <motion.a
            href="#about"
            className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-300 mb-2 tracking-widest">
          Scroll
        </span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
