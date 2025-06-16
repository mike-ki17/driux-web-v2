import React, { useState } from 'react';
import { Send, MessageCircle, User, Building, Phone, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppSubmit = () => {
    const { name, business, phone, message } = formData;
    
    if (!name || !business || !phone) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    const whatsappMessage = encodeURIComponent(
      `¡Hola! Soy ${name} y tengo un negocio de ${business}.\n\n` +
      `📱 Mi teléfono: ${phone}\n\n` +
      `💼 Mensaje: ${message || 'Me interesa conocer más sobre sus servicios digitales'}\n\n` +
      `¿Podrían brindarme una cotización personalizada?`
    );
    
    window.open(`https://wa.me/573001234567?text=${whatsappMessage}`, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleWhatsAppSubmit();
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Solicita tu Cotización
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cuéntanos sobre tu negocio y recibe una propuesta personalizada en WhatsApp
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:bg-gray-800/80 transition-all duration-300">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-3">
                  <User className="inline h-4 w-4 mr-2" />
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Tu nombre completo"
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                  required
                />
              </div>

              {/* Business field */}
              <div>
                <label htmlFor="business" className="block text-sm font-semibold text-white mb-3">
                  <Building className="inline h-4 w-4 mr-2" />
                  Tipo de negocio *
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleInputChange}
                  placeholder="Ej: Restaurante, Tienda, Consultoría"
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Phone field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-white mb-3">
                <Phone className="inline h-4 w-4 mr-2" />
                Teléfono de contacto *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Ej: +57 300 123 4567"
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                required
              />
            </div>

            {/* Message field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white mb-3">
                <MessageSquare className="inline h-4 w-4 mr-2" />
                Mensaje adicional (opcional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Cuéntanos qué necesitas o qué te gustaría lograr con tu presencia digital..."
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 resize-none"
              ></textarea>
            </div>

            {/* Submit buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 flex items-center justify-center gap-3"
              >
                <MessageCircle className="h-5 w-5" />
                Enviar por WhatsApp
              </button>
              
              <button
                type="button"
                onClick={handleWhatsAppSubmit}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center gap-3"
              >
                <Send className="h-5 w-5" />
                Solicitar Cotización
              </button>
            </div>
          </form>

          {/* Additional info */}
          <div className="mt-8 text-center">
            <div className="inline-block bg-blue-500/20 border border-blue-500/30 rounded-lg px-4 py-2">
              <p className="text-blue-300 text-sm">
                📱 Te responderemos por WhatsApp en menos de 1 hora durante horario laboral
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;