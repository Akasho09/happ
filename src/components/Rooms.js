import React from 'react';

const rooms = [
  {
    name: 'Deluxe Room',
    description: 'A spacious room with a king-sized bed, a private balcony, and modern amenities.',
    image: '/assets/room1.jpg',
    price: '₹2,500',
  },
  {
    name: 'Standard Room',
    description: 'A cozy room with a queen-sized bed, perfect for solo travelers or couples.',
    image: '/assets/large.jpg',
    price: '₹1,800',
  },
  {
    name: 'Family Suite',
    description: 'A large suite with multiple beds, ideal for families and groups.',
    image: '/assets/small.jpg',
    price: '₹3,500',
  },
];

const Rooms = () => {
  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Our Rooms</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our selection of beautifully designed rooms, each offering a unique blend of comfort and style.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div 
              key={room.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img src={room.image} alt={room.name} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{room.name}</h3>
                <p className="text-gray-700 mb-4">{room.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary">{room.price} <span className="text-sm font-normal text-gray-600">/ night</span></span>
                  <a 
                    href="#contact"
                    className="bg-secondary hover:bg-primary text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
