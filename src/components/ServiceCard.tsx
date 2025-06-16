import React from "react";
import { MessageCircle, Check, Target } from "lucide-react";

interface Service {
  name: string;
  price: string;
  level: string;
  levelColor: string;
  description: string;
  features: string[];
  ideal: string;
  popular: boolean;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `¡Hola! Me interesa el plan "${service.name}" por ${service.price}. ¿Podrían brindarme más información y ayudarme con la cotización?`
    );
    window.open(`https://wa.me/573227173488?text=${message}`, "_blank");
  };

  return (

    <div className={`group bg-gray-800/50 backdrop-blur-sm border ${
                service.popular ? 'border-purple-500/50 ring-2 ring-purple-500/20' : 'border-gray-700/50'
              } rounded-2xl p-6 hover:bg-gray-800/80 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2`}>
      {service.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Más Popular
          </div>
        </div>
      )}
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${service.levelColor}`}
          >
            {service.level}
          </span>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-white mb-1">
            {service.price}
          </div>
          <div className="text-xs text-gray-400">Pago único</div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Features */}
      <div className="mb-6">
        <h5 className="text-sm font-semibold text-white mb-3">✨ Incluye:</h5>
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-gray-300"
            >
              <Check className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Ideal for */}
      <div className="mb-6 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
        <div className="flex items-start gap-2">
          <Target className="h-4 w-4 text-blue-400 mt-0.5" />
          <div>
            <div className="text-xs font-semibold text-blue-400 mb-1">
              Ideal para:
            </div>
            <div className="text-sm text-gray-300">{service.ideal}</div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={handleWhatsAppContact}
        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center gap-2"
      >
        <MessageCircle className="h-4 w-4" />
        Contactar por WhatsApp
      </button>
    </div>
  );
};

export default ServiceCard;
