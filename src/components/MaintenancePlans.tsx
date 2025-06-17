import React from 'react';
import { Shield, MessageCircle, Zap, Crown } from 'lucide-react';

const MaintenancePlans = () => {
  const plans = [
    {
      name: "Básico",
      price: "$45.000",
      icon: Shield,
      color: "from-green-500 to-emerald-600",
      features: [
        "Hosting y dominio incluidos",
        "Backups automáticos mensuales",
        "Monitoreo básico de disponibilidad",
        "Actualizaciones de seguridad esenciales",
        "Soporte técnico básico",
        "1 cambio menor de contenido al mes (texto o imagen)"
      ],
      popular: false
    },
    {
      name: "Intermedio",
      price: "$60.000",
      icon: MessageCircle,
      color: "from-blue-500 to-purple-600",
      features: [
        "Todo lo del Plan Básico",
        "Backups semanales",
        "Soporte prioritario por WhatsApp",
        "Cambios menores ilimitados (contenido o imágenes)",
        "Optimización básica de velocidad",
        "Reportes mensuales",
        "Reporte mensual de rendimiento y visitas"
      ],
      popular: true
    },
    {
      name: "Avanzado",
      price: "$80.000",
      icon: Crown,
      color: "from-purple-500 to-pink-600",
      features: [
        "Todo lo del plan Intermedio",
        "Backups diarios",
        "Cambios estructurales y de diseño (1 al mes)",
        "Optimización continua de SEO y velocidad",
        "Soporte preferencial",
        "Actualizaciones de funcionalidad",
        "Consultoría digital mensual"
      ],
      popular: false
    }
  ];

  const handleWhatsAppContact = (planName: string, price: string) => {
    const message = encodeURIComponent(
      `¡Hola! Me interesa contratar el plan de mantenimiento "${planName}" por ${price} mensual. ¿Podrían brindarme más información?`
    );
    window.open(`https://wa.me/573105879386?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Planes de Mantenimiento
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Mantén tu sitio web funcionando perfectamente con nuestros planes mensuales
          </p>
          <div className="inline-block bg-yellow-500/20 border border-yellow-500/30 rounded-lg px-4 py-2">
            <p className="text-yellow-300 text-sm font-medium">
              ⚠️ Importante: A partir del segundo mes, se requiere un plan de mantenimiento activo
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-800/50 backdrop-blur-sm border ${
                plan.popular ? 'border-purple-500/50 ring-2 ring-purple-500/20' : 'border-gray-700/50'
              } rounded-2xl p-8 hover:bg-gray-800/80 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${plan.color} mb-4`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-white mb-1">{plan.price}</div>
                <div className="text-gray-400">por mes</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleWhatsAppContact(plan.name, plan.price)}
                className={`w-full bg-gradient-to-r ${plan.color} text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2`}
              >
                <MessageCircle className="h-5 w-5" />
                Contratar Plan
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 max-w-4xl mx-auto">
            <h4 className="text-xl font-bold text-white mb-4">💡 ¿Por qué necesitas mantenimiento?</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h5 className="font-semibold text-blue-400 mb-2">Seguridad y Rendimiento</h5>
                <p className="text-gray-300 text-sm">Actualizaciones constantes, backups seguros y monitoreo continuo para mantener tu sitio funcionando perfectamente.</p>
              </div>
              <div>
                <h5 className="font-semibold text-purple-400 mb-2">Hosting y Dominio</h5>
                <p className="text-gray-300 text-sm">Sin mantenimiento activo, tu sitio web dejará de estar disponible online. El hosting y dominio dependen del plan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenancePlans;