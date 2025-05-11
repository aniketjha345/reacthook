// import { motion } from 'framer-motion'; // Removed as it's unused
import styled from 'styled-components';
import Services from '../components/Services'; // Corrected import name

const ServicesPageContainer = styled.div`
  padding: 6rem 2rem 2rem;
  background: ${({ theme }) => theme.background};
  min-height: 100vh;
`;

const ServicesPage = () => {
  return (
    <ServicesPageContainer>
      <Services /> {/* Updated component usage */}
    </ServicesPageContainer>
  );
};

export default ServicesPage;