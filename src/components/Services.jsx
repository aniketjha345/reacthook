import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServicesSection = styled.section`
  padding: clamp(2rem, 6vw, 6rem) clamp(1rem, 4vw, 2rem);
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: min(1200px, 95%);
  margin: 0 auto;
  width: 100%;
  padding: clamp(1rem, 3vw, 2rem);
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, ${({ theme }) => theme.accent}, ${({ theme }) => theme.accentHover});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
  gap: clamp(1.5rem, 4vw, 2.5rem);
  width: 100%;
`;

const ServiceCard = styled(motion.div)`
  background: ${({ theme }) => theme.background};
  border-radius: 15px;
  padding: clamp(1.5rem, 4vw, 2rem);
  box-shadow: 0 4px 20px ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  font-size: clamp(2rem, 5vw, 2.5rem);
  margin-bottom: clamp(1rem, 3vw, 1.5rem);
  color: ${({ theme }) => theme.accent};
`;

const ServiceTitle = styled.h3`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  margin-bottom: clamp(0.75rem, 2vw, 1rem);
  color: ${({ theme }) => theme.text};
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
`;

const Services = () => {
  const services = [
    {
      icon: '🎬',
      title: 'Video Production',
      description: 'Professional video production services including filming, editing, and post-production with cutting-edge techniques.'
    },
    {
      icon: '✍️',
      title: 'Scripting',
      description: 'Creative and engaging script writing for various media formats, from promotional videos to full-length features.'
    },
    {
      icon: '🎨',
      title: 'Graphic Design',
      description: 'Eye-catching visual designs that communicate your message effectively across all digital platforms.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <ServicesSection id="services">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </Title>
        <ServicesGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services;