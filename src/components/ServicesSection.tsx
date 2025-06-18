import ServiceCard from "./ServiceCard";
import { Globe, ShoppingCart, BarChart3, Calendar } from "lucide-react";

const ServicesSection = () => {
  const serviceCategories = [
    {
      title: "Presencia Online",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          name: "Start Web Pro",
          price: "$270.000",
          level: "Básico",
          levelColor: "bg-green-500",
          description:
            "Página informativa responsive perfecta para iniciar tu presencia digital",
          features: [
            "Página web compacta de alto impacto con 4–5 secciones clave",
            "Diseño responsive y moderno",
            "Botón de WhatsApp integrado",
            "Mapa de ubicación (Google Maps)",
            "Formulario de contacto básico",
            "Dominio y hosting por 1 año",
            "Incluye 1 mes gratis de mantenimiento. Después, es necesario un plan mensual para mantener tu web activa y segura.",
          ],
          ideal:
            "Negocios nuevos, servicios personales, emprendedores o marcas que necesitan estar en línea de forma rápida y económica.",
          popular: false,
        },
        {
          name: "Stand Digital",
          price: "$300.000",
          level: "Intermedio",
          levelColor: "bg-yellow-500",
          description:
            "Showcase profesional para mostrar tus productos y servicios",
          features: [
            "Página web con diseño responsive y moderno",
            "Galería de imágenes optimizada",
            "Sección de servicios o productos (tipo catálogo básico)",
            "Formulario de contacto con validación",
            "Optimización SEO local básica",
            "Botón de contacto directo por WhatsApp",
            "Dominio y hosting por 1 año",
            "Incluye 1 mes gratis de mantenimiento. Después, es necesario un plan mensual para mantener tu web activa y segura.",
          ],
          ideal:
            "Negocios con productos físicos, marcas personales, portafolios visuales, salones de belleza, estudios creativos o tiendas que aún no venden online.",
          popular: true,
        },
      ],
    },
    {
      title: "Venta y Promoción Online",
      icon: ShoppingCart,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          name: "Catálogo Comercial Interactivo",
          price: "$520.000",
          level: "Intermedio",
          levelColor: "bg-yellow-500",
          description:
            "Muestra y vende tus productos con un catálogo interactivo",
          features: [
            "Sitio web con catálogo visual e intuitivo",
            "Página de productos con filtros simples",
            "Galería de imágenes optimizada",
            "Carga básica de productos (hasta 30)",
            "Contacto directo por WhatsApp desde cada producto",
            "Panel de administración básico para gestionar productos",
            "Hosting y dominio por 1 año",
            "Incluye 1 mes gratis de mantenimiento. Después, es necesario un plan mensual para mantener tu web activa y segura.",
          ],
          ideal:
            "Ferreterías, librerías, panaderías, tiendas de ropa u otros negocios que venden presencialmente y quieren destacar en línea.",
          popular: false,
        },
        {
          name: "Ecommerce Lite",
          price: "$600.000",
          level: "Avanzado",
          levelColor: "bg-red-500",
          description: "Tienda online completa para vender directamente",
          features: [
            "Sitio web ecommerce responsive",
            "Carrito de compras básico",
            "Gestión de hasta 50 productos",
            "Inventario básico con control de stock",
            "Checkout por WhatsApp",
            "Panel de administración sencillo",
            "Hosting y dominio por 1 año",
            "Incluye 1 mes gratis de mantenimiento. Después, es necesario un plan mensual para mantener tu web activa y segura.",
          ],
          ideal:
            "Emprendimientos que venden por catálogo, redes sociales o quieren empezar a vender online sin plataformas externas.",
          popular: true,
        },
        // {
        //   name: "Combo Delivery Completo",
        //   price: "$450.000",
        //   level: "Avanzado",
        //   levelColor: "bg-red-500",
        //   description: "Solución completa para restaurantes y delivery",
        //   features: [
        //     "Desarrollo web personalizado.",
        //     "Menú digital navegable.",
        //     "Formulario o sistema de pedidos",
        //     "Integración básica con WhatsApp",
        //     "Integración con delivery",
        //     "Reportes de ventas"
        //   ],
        //   ideal: "Restaurantes, comidas rápidas, reposterías"
        // }
      ],
    },
    {
      title: "Gestión Interna y Control",
      icon: BarChart3,
      color: "from-green-500 to-teal-500",
      services: [
        {
          name: "Control Empresarial",
          price: "$750.000",
          level: "Avanzado",
          levelColor: "bg-red-500",
          description: "Sistema completo de gestión empresarial",
          features: [
            "Facturación interna completa",
            "CRM básico integrado",
            "Reportes de ventas detallados",
            "Análisis de rendimiento simple",
            "Panel de control personalizado",
            "Backups automáticos semanales",
            "Hosting y dominio por 1 año",
            "El servicio incluye 1 mes de mantenimiento gratuito. Para mantener el funcionamiento, hosting activo y soporte técnico, se requiere suscripción mensual posterior.",
          ],
          ideal:
            "Negocios que manejan muchos productos, ventas constantes y desean controlar su operación diaria",
          popular: false,
        },
        {
          name: "Admin Lite",
          price: "$400.000",
          level: "Intermedio",
          levelColor: "bg-yellow-500",
          description: "Gestión simplificada para pequeños negocios",
          features: [
            "Gestión básica de inventario",
            "Alertas manuales de stock bajo",
            "Facturación interna simple",
            "Reportes básicos de ventas",
            "Backup semanal automático",
            "Interfaz web clara y fácil de usar",
            "Hosting y dominio por 1 año",
            "El servicio incluye 1 mes de mantenimiento gratuito. Para mantener el funcionamiento, hosting activo y soporte técnico, se requiere suscripción mensual posterior.",
          ],
          ideal:
            "Negocios que necesitan registrar productos, emitir facturas básicas y visualizar reportes",
          popular: false,
        },
        {
          name: "Driux CRM",
          price: "$450.000",
          level: "Intermedio",
          levelColor: "bg-yellow-500",
          description: "Gestión de clientes profesional",
          features: [
            "Registro y edición de clientes",
            "Historial básico de contacto",
            "Exportación de datos",
            "Búsqueda rápida por nombre o teléfono",
            "Recordatorios manuales por fecha",
            "Hosting y dominio por 1 año",
            "El servicio incluye 1 mes de mantenimiento gratuito. Para mantener el funcionamiento, hosting activo y soporte técnico, se requiere suscripción mensual posterior.",
          ],
          ideal: "Asesorias, servicios con clientes recurrentes.",
          popular: false,
        },
      ],
    },
    {
      title: "Servicios Especializados",
      icon: Calendar,
      color: "from-pink-500 to-purple-500",
      services: [
        {
          name: "AgendaBarber",
          price: "$620.000",
          level: "Especializado",
          levelColor: "bg-purple-500",
          description: "Sistema de reservas especializado para barberías",
          features: [
            "Sistema de reservas inteligente",
            "Diseño personalizado",
            "WhatsApp automático",
            "Listado de horarios libres",
            "Gestión de personal",
            "Panel de administración",
            "Recordatorios automáticos",
            "Este servicio cuenta con 1 mes gratuito de mantenimiento. Para mantener operativos el hosting, soporte y actualizaciones, se requiere plan mensual.",
          ],
          ideal: "Barberías que necesitan agendamiento digital",
          popular: false,
        },
        {
          name: "Sistema de Reservas WhatsApp",
          price: "$550.000",
          level: "Especializado",
          levelColor: "bg-purple-500",
          description: "Automatización completa de reservas por WhatsApp",
          features: [
            "Bot de WhatsApp integrado",
            "Calendario de disponibilidad",
            "Confirmación automática",
            "Gestión de cancelaciones",
            "Reportes de ocupación",
            "Panel administrativo",
            "Este servicio cuenta con 1 mes gratuito de mantenimiento. Para mantener operativos el hosting, soporte y actualizaciones, se requiere plan mensual.",
          ],
          ideal: "Servicios de citas y reservas",
          popular: false,
        },
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-6 bg-gray-900 relative overflow-hidden"
    >
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
            Soluciones digitales diseñadas específicamente para cada tipo de
            negocio
          </p>
        </div>

        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <div className="flex items-center gap-4 mb-12">
              <div
                className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}
              >
                <category.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">
                {category.title}
              </h3>
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
