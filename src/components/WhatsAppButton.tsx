import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    // Show popup after 10 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "¡Hola! Vi su página web y me interesa conocer más sobre sus servicios digitales. ¿Podrían ayudarme?"
    );
    window.open(`https://wa.me/573227173488?text=${message}`, '_blank');
    setShowPopup(false);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* Floating WhatsApp button */}
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={handleWhatsAppClick}
            className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-bounce"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        </div>
      )}

      {/* WhatsApp popup */}
      {showPopup && (
        <div className="fixed bottom-24 right-6 z-50 max-w-sm">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-4 shadow-2xl animate-slide-up">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-full">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Soporte Digital</div>
                  <div className="text-xs text-green-400">En línea</div>
                </div>
              </div>
              <button
                onClick={closePopup}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-300 text-sm">
                ¡Hola! 👋 ¿Necesitas ayuda para elegir el mejor plan para tu negocio?
              </p>
            </div>
            
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
            >
              Chatear por WhatsApp
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;