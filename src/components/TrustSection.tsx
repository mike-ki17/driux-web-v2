import { Zap, MapPin, Palette, Award } from 'lucide-react';

const TrustSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Carga Ultra Rápida",
      description: "Sitios web optimizados para una navegación fluida y mejor posicionamiento en buscadores.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: MapPin,
      title: "Soporte Local",
      description: "Equipo colombiano que entiende tu mercado. Soporte en español y horarios locales.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Personalización Total",
      description: "Cada proyecto es único. Diseños personalizados que reflejan la identidad de tu marca.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Award,
      title: "Profesionalismo en Cada Detalle",
      description: "Desarrollos web estratégicos que fortalecen la presencia digital de tu negocio.",
      color: "from-green-400 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ¿Por qué elegirnos?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Combinamos tecnología de vanguardia con un servicio personalizado y local
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/80 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${benefit.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <div className="mt-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Proyectos Exitosos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-gray-300">Satisfacción Cliente</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-300">Soporte Técnico</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">5 años</div>
              <div className="text-gray-300">Experiencia</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TrustSection;