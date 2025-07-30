import React, { useState } from 'react';

const galleryImages = [
  { src: '/assets/ayodhya.webp', alt: 'Ayodhya View', category: 'Destinations' },
  { src: '/assets/baranti.webp', alt: 'Baranti Lake', category: 'Destinations' },
  { src: '/assets/mithonDam.webp', alt: 'Mithon Dam', category: 'Destinations' },
  { src: '/assets/palash.webp', alt: 'Palash Flowers', category: 'Nature' },
  { src: '/assets/flower.jpg', alt: 'Beautiful Flowers', category: 'Nature' },
  { src: '/assets/out.jpg', alt: 'Guest House Exterior', category: 'Property' },
  { src: '/assets/recep.jpg', alt: 'Reception Area', category: 'Property' },
  { src: '/assets/service.jpg', alt: 'Service Area', category: 'Property' },
];

const categories = ['All', 'Property', 'Destinations', 'Nature'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Gallery</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the beauty of our guest house and the stunning destinations around us.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-64 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative max-w-4xl max-h-full p-4">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
