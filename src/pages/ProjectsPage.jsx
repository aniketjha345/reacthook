// import { motion } from 'framer-motion'; // Removed as it's unused
import styled from 'styled-components';
import Projects from '../components/Projects'; // Corrected import name

const ProjectsPageContainer = styled.div`
  padding: 6rem 2rem 2rem;
  background: ${({ theme }) => theme.background};
  min-height: 100vh;
`;

const ProjectsPage = () => {
  return (
    <ProjectsPageContainer>
      <Projects /> {/* Updated component usage */}
    </ProjectsPageContainer>
  );
};

export default ProjectsPage;