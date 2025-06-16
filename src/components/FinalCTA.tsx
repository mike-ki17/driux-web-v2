import React from 'react';
import { MessageCircle, Rocket, ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "¡Hola! Estoy listo para comenzar mi transformación digital. ¿Podrían ayudarme a elegir el mejor plan para mi negocio?"
    );
    window.open(`https://wa.me/573227173488?text=${message}`, '_blank');
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main CTA */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <Rocket className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium text-blue-300">Transformación Digital</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Empieza hoy tu
            </span>
            <br />
            <span className="text-white">transformación digital</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            No esperes más. <span className="text-blue-400 font-semibold">Miles de negocios</span> ya están 
            <span className="text-purple-400 font-semibold"> creciendo online</span>. 
            <br />Es tu momento de <span className="text-pink-400 font-semibold">brillar en digital</span>.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button
            onClick={handleWhatsAppContact}
            className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-8 py-4 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 flex items-center gap-3"
          >
            <MessageCircle className="h-6 w-6" />
            Comenzar ahora por WhatsApp
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button
            onClick={scrollToServices}
            className="group border-2 border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/10 px-8 py-4 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-105 text-blue-400 hover:text-blue-300"
          >
            Ver todos los planes
          </button>
        </div>

        {/* Urgency message */}
        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-yellow-300 mb-3">⚡ Oferta por tiempo limitado</h3>
          <p className="text-gray-300 mb-4">
            Los primeros 20 clientes de este mes reciben <span className="text-yellow-400 font-semibold">50% de descuento</span> en el primer mes de mantenimiento.
          </p>
          <div className="text-sm text-yellow-200">
            ✨ Solo quedan pocos cupos disponibles
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 mb-2">✅ Garantía</div>
            <div className="text-gray-400 text-sm">100% satisfacción o te devolvemos tu dinero</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400 mb-2">⚡ Entrega</div>
            <div className="text-gray-400 text-sm">Tu sitio listo en máximo 7 días</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400 mb-2">🎯 Soporte</div>
            <div className="text-gray-400 text-sm">Atención personalizada 24/7</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;