import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const PortfolioSection = styled.section`
  padding-top: max(80px, clamp(4rem, 10vw, 8rem));
  padding-bottom: clamp(4rem, 10vw, 8rem);
  padding-left: clamp(1rem, 5vw, 2rem);
  padding-right: clamp(1rem, 5vw, 2rem);
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  margin: clamp(2rem, 5vw, 4rem) 0;
  background: linear-gradient(45deg, ${({ theme }) => theme.accent}, ${({ theme }) => theme.accentHover});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: clamp(2rem, 5vw, 4rem) 0;
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)`
  padding: 0.5rem 1.5rem;
  border: 2px solid ${({ theme, active }) => active ? theme.accent : theme.border};
  border-radius: 25px;
  background: ${({ theme, active }) => active ? theme.accent : 'transparent'};
  color: ${({ theme, active }) => active ? theme.background : theme.text};
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.background};
    border-color: ${({ theme }) => theme.accent};
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
  gap: clamp(1.5rem, 4vw, 2.5rem);
  padding: clamp(0.5rem, 2vw, 1.5rem);
  width: 100%;
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.surface};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px ${({ theme }) => theme.shadow};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px ${({ theme }) => theme.shadow};
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${({ theme }) => theme.accent};
  position: relative;
  overflow: hidden;

  &::before {
    content: '${props => props.category}';
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.5rem 1rem;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border-radius: 15px;
    font-size: 0.8rem;
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Brand Video Campaign',
      description: 'A series of engaging promotional videos for a major brand launch.',
      category: 'video',
      image: '🎥'
    },
    {
      title: 'Corporate Identity Design',
      description: 'Complete visual identity system including logo and brand guidelines.',
      category: 'design',
      image: '🎨'
    },
    {
      title: 'Short Film Script',
      description: 'Award-winning script for an independent short film production.',
      category: 'script',
      image: '✍️'
    },
    {
      title: 'Social Media Graphics',
      description: 'Eye-catching visual content for various social media platforms.',
      category: 'design',
      image: '📱'
    },
    {
      title: 'Documentary Series',
      description: 'Multi-episode documentary series about environmental conservation.',
      category: 'video',
      image: '🎬'
    },
    {
      title: 'Web Series Script',
      description: 'Original script for a six-episode web series.',
      category: 'script',
      image: '📝'
    }
  ];

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Video', value: 'video' },
    { label: 'Design', value: 'design' },
    { label: 'Script', value: 'script' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.category === activeFilter
  );

  return (
    <PortfolioSection id="portfolio">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Portfolio
        </Title>

        <FilterContainer>
          {filters.map((filter) => (
            <FilterButton
              key={filter.value}
              active={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </FilterButton>
          ))}
        </FilterContainer>

        <ProjectsGrid
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <ProjectImage category={project.category}>
                  <div style={{ fontSize: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    {project.image}
                  </div>
                </ProjectImage>
                <ProjectInfo>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                </ProjectInfo>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </ProjectsGrid>
      </Container>
    </PortfolioSection>
  );
};

export default Portfolio;