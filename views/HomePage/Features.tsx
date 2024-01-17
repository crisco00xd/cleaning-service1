import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Servicio Personalizado',
    description:
      'Cada espacio es único, y por eso ofrecemos servicios de limpieza personalizados. Nos adaptamos a tus necesidades y preferencias específicas, asegurando que cada rincón de tu hogar o negocio reciba la atención que merece.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Profesionales Capacitados',
    description:
      'Nuestro equipo está compuesto por profesionales altamente capacitados y experimentados en técnicas de limpieza avanzadas. Nos dedicamos a brindar un servicio de calidad superior, asegurando resultados impecables.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Productos Ecológicos',
    description:
      'Comprometidos con la protección del medio ambiente, utilizamos productos de limpieza ecológicos. Estos productos son seguros para tu familia, mascotas y el planeta, garantizando una limpieza efectiva y sostenible.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Flexibilidad de Horario',
    description:
      'Entendemos lo ocupada que puede ser la vida, por eso ofrecemos horarios flexibles para acomodarnos a tu ritmo. Ya sea limpieza semanal, bisemanal o mensual, nos ajustamos a tu tiempo.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Atención al Detalle',
    description:
      'Nos enorgullecemos de nuestra meticulosa atención al detalle. Desde el polvo en las repisas hasta las esquinas más difíciles, nos aseguramos de que cada área quede impecable.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Servicio Confiable y Seguro',
    description:
      'Tu seguridad y confianza son nuestra prioridad. Nuestro equipo está verificado y asegurado, brindándote tranquilidad al saber que tu espacio está en buenas manos.',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'Tecnología Avanzada',
    description:
      'Incorporamos la última tecnología en equipos de limpieza para asegurar una eficiencia y efectividad superiores. Desde aspiradoras de alta potencia hasta soluciones de limpieza innovadoras, utilizamos lo mejor para tu espacio.',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Satisfacción Garantizada',
    description:
      'Nuestro objetivo es tu completa satisfacción. Si alguna vez no estás completamente satisfecho con nuestro servicio, haremos lo necesario para corregirlo y asegurarnos de cumplir con tus expectativas',
  },
  {
    imageUrl: '/grid-icons/asset-9.svg',
    title: 'Consultas y Presupuestos Gratuitos',
    description:
      'Ofrecemos consultas y presupuestos gratuitos para ayudarte a planificar tu servicio de limpieza sin compromiso. Evaluamos tus necesidades y proporcionamos una cotización transparente y justa.',
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
