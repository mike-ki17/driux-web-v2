import ServiceCard from './ServiceCard';
import { Globe, ShoppingCart, BarChart3, Calendar } from 'lucide-react';

const ServicesSection = () => {
  const serviceCategories = [
    {
      title: "Presencia Online",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          name: "Web Rápida",
          price: "$250.000",
          level: "Básico",
          levelColor: "bg-green-500",
          description: "Página informativa responsive perfecta para iniciar tu presencia digital",
          features: [
            "Pagina web con diseño responsive profesional",
            "Botón de WhatsApp integrado",
            "Mapa de ubicación",
            "Formulario de contacto",
            "Dominio y hosting 1 año",
            "1 mes de mantenimiento incluido"
          ],
          ideal: "Negocios nuevos o marcas que buscan destacar online."
        },
        {
          name: "Vitrina Digital Premium",
          price: "$280.000",
          level: "Intermedio",
          levelColor: "bg-yellow-500",
          description: "Showcase profesional para mostrar tus productos y servicios",
          features: [
            "Pagina web con diseño responsive profesional",
            "Galería de imágenes optimizada",
            "Catálogo de servicios/productos",
            "SEO local optimizado",
            "Formulario de contacto avanzado",
            "Dominio y hosting 1 año",
          ],
          ideal: "Negocios con productos físicos o portafolio visual"
        }
      ]
    },
    {
      title: "Venta y Promoción Online",
      icon: ShoppingCart,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          name: "Catálogo Comercial Interactivo",
          price: "$320.000",
          level: "Intermedio",
          levelColor: "bg-yellow-500",
          description: "Muestra y vende tus productos con un catálogo interactivo",
          features: [
            "Pagina web con catálogo interactivo",
            "Página de productos con filtros",
            "Galería optimizada",
            "Carga básica de productos",
            "Contacto directo por WhatsApp",
            "Hosting y dominio 1 año",
            "Panel de administración"
          ],
          ideal: "Ferreterías, librerías, panaderías, ropa"
        },
        {
          name: "Ecommerce Lite",
          price: "$500.000",
          level: "Avanzado",
          levelColor: "bg-red-500",
          description: "Tienda online completa para vender directamente",
          features: [
            "Tienda online profesional",
            "Carrito de compras simple",
            "Hasta 50 productos",
            "Gestion de inventario básico",
            "Checkout por WhatsApp",
            "Panel de administración",
            "Dominio y hosting 1 año",
          ],
          ideal: "Negocios que venden por catálogo o redes"
        },
        {
          name: "Combo Delivery Completo",
          price: "$450.000",
          level: "Avanzado",
          levelColor: "bg-red-500",
          description: "Solución completa para restaurantes y delivery",
          features: [
            "Menú interactivo digital",
            "Sistema de pedidos online",
            "Bot de WhatsApp automático",
            "Panel de administración",
            "Integración con delivery",
            "Reportes de ventas"
          ],
          ideal: "Restaurantes, comidas rápidas, reposterías"
        }
      ]
    },
    {
      title: "Gestión Interna y Control",
      icon: BarChart3,
      color: "from-green-500 to-teal-500",
      services: [
        {
          name: "Control Empresarial",
          price: "$420.000",
          level: "Avanzado",
          levelColor: "bg-red-500",
          description: "Sistema completo de gestión empresarial",
          features: [
            "Sistema de facturación completo",
            "CRM integrado",
            "Reportes de ventas detallados",
            "Análisis de rendimiento",
            "Backups automáticos",
            "Panel de control avanzado"
          ],
          ideal: "Negocios con flujo diario de ventas"
        },
        {
          name: "Admin Lite",
          price: "$300.000",
          level: "Intermedio",
          levelColor: "bg-yellow-500",
          description: "Gestión simplificada para pequeños negocios",
          features: [
            "Inventario simple y efectivo",
            "Alertas de stock bajo",
            "Facturación rápida",
            "Reportes básicos",
            "Backup semanal",
            "Interfaz intuitiva"
          ],
          ideal: "Ferreterías, papelerías, microempresas"
        },
        {
          name: "CRM Solo",
          price: "$480.000",
          level: "Intermedio",
          levelColor: "bg-yellow-500",
          description: "Gestión de clientes profesional",
          features: [
            "Gestión completa de clientes",
            "Historial de interacciones",
            "Exportación de datos",
            "Seguimiento de leads",
            "Recordatorios automáticos",
            "Dashboard personalizado"
          ],
          ideal: "Barberías, asesores, negocios que fidelizan"
        }
      ]
    },
    {
      title: "Servicios Especializados",
      icon: Calendar,
      color: "from-pink-500 to-purple-500",
      services: [
        {
          name: "AgendaBarber",
          price: "$320.000",
          level: "Especializado",
          levelColor: "bg-purple-500",
          description: "Sistema de reservas especializado para barberías",
          features: [
            "Sistema de reservas inteligente",
            "WhatsApp automático",
            "Listado de horarios libres",
            "Gestión de personal",
            "Panel de administración",
            "Recordatorios automáticos"
          ],
          ideal: "Barberías que necesitan agendamiento digital"
        },
        {
          name: "Sistema de Reservas WhatsApp",
          price: "$350.000",
          level: "Especializado",
          levelColor: "bg-purple-500",
          description: "Automatización completa de reservas por WhatsApp",
          features: [
            "Bot de WhatsApp integrado",
            "Calendario de disponibilidad",
            "Confirmación automática",
            "Gestión de cancelaciones",
            "Reportes de ocupación",
            "Panel administrativo"
          ],
          ideal: "Servicios de citas y reservas"
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Catálogo de Servicios
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluciones digitales diseñadas específicamente para cada tipo de negocio
          </p>
        </div>

        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <div className="flex items-center gap-4 mb-12">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}>
                <category.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">{category.title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <ServiceCard key={serviceIndex} service={service} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;