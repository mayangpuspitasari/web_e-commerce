import React from 'react';

const Kontak = () => {
  return (
    <div className="bg-gray-100 py-10" id="kontak">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Kontak Kami</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Bagian Peta */}
          <div className="lg:w-1/2">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8373410510756!2d144.95592831547184!3d-37.817209379751575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218cce7e0!2sVictoria%20State%20Library!5e0!3m2!1sen!2sau!4v1634016555801!5m2!1sen!2sau"
              width="100%"
              height="400"
              className="rounded-lg shadow-md"
              loading="lazy"
            ></iframe>
          </div>

          {/* Bagian Informasi Kontak */}
          <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Hubungi Kami</h3>
            <p className="text-gray-700 mb-4">
              Kami selalu siap membantu Anda! Silakan hubungi kami melalui
              informasi berikut:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full mr-4">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <span> Jl. Imam Bonjol. 229, Kisaran, Indonesia</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full mr-4">
                  <i className="fas fa-phone"></i>
                </span>
                <span>(+62) 123-456-789</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full mr-4">
                  <i className="fas fa-envelope"></i>
                </span>
                <span>brownies@gmail.com</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full mr-4">
                  <i className="fas fa-clock"></i>
                </span>
                <span>Senin - Sabtu: 09.00 - 18.00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontak;

