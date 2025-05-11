import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

const TestimonialsSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, ${({ theme }) => theme.accent}, ${({ theme }) => theme.accentHover});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TestimonialContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const TestimonialCard = styled(motion.div)`
  background: ${({ theme }) => theme.surface};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 20px ${({ theme }) => theme.shadow};
  text-align: center;
`;

const Quote = styled.div`
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};
  font-style: italic;
`;

const Author = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 0.5rem;
`;

const Role = styled.div`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.9rem;
`;

const NavigationButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.accent};
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  z-index: 2;
  
  &:left {
    left: -20px;
  }
  
  &:right {
    right: -20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const PrevButton = styled(NavigationButton)`
  left: 0;
`;

const NextButton = styled(NavigationButton)`
  right: 0;
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const Dot = styled(motion.button)`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${({ active, theme }) => active ? theme.accent : theme.border};
  cursor: pointer;
  padding: 0;
`;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      quote: "The team's creative vision and technical expertise transformed our project into something truly extraordinary. Their attention to detail in both scripting and visual elements was impressive.",
      author: "Sarah Johnson",
      role: "Marketing Director"
    },
    {
      quote: "Working with them was a game-changer for our brand. The video production quality and graphic design work exceeded our expectations and helped us stand out in our industry.",
      author: "Michael Chen",
      role: "CEO, TechStart"
    },
    {
      quote: "Their scriptwriting talent brought our story to life in ways we never imagined. The team's ability to capture our brand's voice while maintaining creativity was remarkable.",
      author: "Emma Rodriguez",
      role: "Creative Director"
    }
  ];

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, nextTestimonial]);

  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, [testimonials.length]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <TestimonialsSection id="testimonials">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </Title>

        <TestimonialContainer>
          <PrevButton
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ←
          </PrevButton>

          <AnimatePresence mode="wait" custom={direction}>
            <TestimonialCard
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
            >
              <Quote>"{testimonials[currentIndex].quote}"</Quote>
              <Author>{testimonials[currentIndex].author}</Author>
              <Role>{testimonials[currentIndex].role}</Role>
            </TestimonialCard>
          </AnimatePresence>

          <NextButton
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            →
          </NextButton>

          <DotContainer>
            {testimonials.map((_, index) => (
              <Dot
                key={index}
                active={currentIndex === index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </DotContainer>
        </TestimonialContainer>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;