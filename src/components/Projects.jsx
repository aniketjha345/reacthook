import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const ProjectsSection = styled.section`
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  padding-top: max(80px, clamp(4rem, 10vw, 8rem));
  padding-bottom: clamp(4rem, 10vw, 8rem);
  padding-left: clamp(1rem, 5vw, 2rem);
  padding-right: clamp(1rem, 5vw, 2rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, ${({ theme }) => theme.accent}11, transparent);
    pointer-events: none;
  }
`;

const SectionTitle = styled(motion.h2)`
  color: ${({ theme }) => theme.text};
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  margin: clamp(2rem, 5vw, 4rem) 0;
  background: linear-gradient(45deg, ${({ theme }) => theme.accent}, ${({ theme }) => theme.accentHover});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: clamp(1.5rem, 4vw, 2.5rem);
  max-width: min(1400px, 95%);
  margin: 0 auto;
  width: 100%;
  padding: clamp(0.5rem, 2vw, 1.5rem);
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: clamp(0.5rem, 2vw, 1rem);
  margin-bottom: clamp(2rem, 5vw, 3rem);
  flex-wrap: wrap;
  padding: 0 clamp(0.5rem, 2vw, 1rem);
`;

const FilterButton = styled(motion.button)`
  padding: clamp(0.4rem, 2vw, 0.5rem) clamp(1rem, 3vw, 1.5rem);
  border-radius: 25px;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  background: ${({ active, theme }) => active ? theme.accent : 'transparent'};
  color: ${({ active, theme }) => active ? theme.background : theme.text};
  border: 2px solid ${({ theme }) => theme.accent};
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.background};
  }
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  background: ${({ theme }) => theme.surface};
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 8px 32px ${({ theme }) => theme.shadow};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px ${({ theme }) => theme.shadow};
  }
  
  &::before {
    content: '';
    display: block;
    padding-top: 75%;
  }
`;

const ProjectImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.color || '#333'};
  transition: transform 0.3s ease;
`;

const ProjectInfo = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: ${({ theme }) => theme.overlay};
  color: ${({ theme }) => theme.text};
  transform: translateY(100%);
  transition: transform 0.3s ease;
  
  ${ProjectCard}:hover & {
    transform: translateY(0);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const projects = [
    {
      title: 'Digital Experience',
      description: 'Interactive web application with modern UI/UX design',
      color: '#ff6b6b',
      category: 'web'
    },
    {
      title: 'Brand Identity',
      description: 'Complete brand identity design and guidelines',
      color: '#4ecdc4',
      category: 'design'
    },
    {
      title: 'Mobile App',
      description: 'Cross-platform mobile application development',
      color: '#45b7d1',
      category: 'mobile'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping experience',
      color: '#96ceb4',
      category: 'web'
    },
    {
      title: 'UI Kit Design',
      description: 'Comprehensive design system for digital products',
      color: '#ff9f43',
      category: 'design'
    },
    {
      title: 'Social Media App',
      description: 'Feature-rich social networking platform',
      color: '#0abde3',
      category: 'mobile'
    }
  ];

  const categories = ['all', 'web', 'mobile', 'design'];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <ProjectsSection id="projects">
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Projects
      </SectionTitle>

      <FilterContainer>
        {categories.map((category, index) => (
          <FilterButton
            key={category}
            active={category === selectedCategory}
            onClick={() => setSelectedCategory(category)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </FilterButton>
        ))}
      </FilterContainer>
      
      <ProjectsGrid>
        <AnimatePresence mode="wait">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ProjectImage color={project.color} />
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectInfo>
          </ProjectCard>
        ))}
        </AnimatePresence>
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;