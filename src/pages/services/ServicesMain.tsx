import { ServicesPage } from "../../components/Services/ServicesPage";
import pdfProductosyServicios from '../../assets/pdfs/productos_y_servicios.pdf';

export const ServicesMain = () => {
    const servicesData = [
        {
          id: 1,
          title: "Productos y Servicios",
          description: [
            "Servicios Empresariales",
            "Banquetería y Coctelería",
            "Food Trucks",
            "Merchandising",
            "Celebraciones y Decoración",
            "Producción y Ambientación",
            "Arriendo de Mobiliario"
          ],
          pdf: pdfProductosyServicios,
          icon: "icon-camera",
          wowDelay: "100ms",
        },
        {
          id: 2,
          title: "Open Box",
          description: "Herramienta estratégica para construir una cultura interna sólida, premiar a los trabajadores, mejorar el bienestar y reforzar tu marca de manera tangible. Son un gesto pensado que inspira emociones positivas y compromiso.",
          link: "stellar-events-co",
          // 👉 apunta directamente al PDF en la carpeta **public/pdfs**
      // pdf: "/pdfs/event-prodigy.pdf",
          icon: "icon-skewer",
          wowDelay: "200ms",
        },
        {
          id: 3,
          title: "La Lonchera",
          description: "Lleva la energía directamente a tu lugar de trabajo con nuestro Carrito de Oficina, un práctico y atractivo servicio móvil diseñado para ofrecer una variedad de snacks, sándwiches, almuerzos y bebestibles ideales para esos momentos de pausa, reuniones, etc.",
          link: "elite-event-management",
          icon: "icon-dinner-table",
          wowDelay: "300ms",
        },
      ];
  return (
    <>
        {/*Services Page Start*/}
        <ServicesPage services={servicesData} />
        {/*Services Page End*/}
    </>
  )
}
