import { motion } from 'framer-motion';
import styled from 'styled-components';
import Portfolio from '../components/Portfolio';

const PortfolioPageContainer = styled.div`
  background: ${({ theme }) => theme.background};
  min-height: 100vh;
  width: 100%;
`;



const PortfolioPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Portfolio />
    </motion.div>
  );
};

export default PortfolioPage;