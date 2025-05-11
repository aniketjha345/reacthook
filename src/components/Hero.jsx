import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: max(80px, clamp(4rem, 10vw, 8rem)) clamp(1rem, 5vw, 3rem) clamp(2rem, 5vw, 4rem);
  text-align: center;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding-top: max(100px, clamp(5rem, 12vw, 9rem));
    justify-content: flex-start;
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(2rem, 6vw, 4.5rem);
  font-weight: bold;
  margin-bottom: clamp(1rem, 3vw, 2rem);
  line-height: 1.2;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(0.9rem, 3vw, 1.3rem);
  max-width: min(800px, 90%);
  margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
  opacity: 0.8;
  line-height: 1.6;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const AnimatedText = styled(motion.span)`
  display: inline-block;
  background: linear-gradient(45deg, ${({ theme }) => theme.accent}, ${({ theme }) => theme.accentHover});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 1;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  width: 30px;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 15px;
  
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    width: 6px;
    height: 6px;
    background: #fff;
    border-radius: 50%;
    transform: translateX(-50%);
    animation: scroll 2s infinite;
  }
  
  @keyframes scroll {
    0% { transform: translate(-50%, 0); opacity: 1; }
    100% { transform: translate(-50%, 20px); opacity: 0; }
  }
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  background: linear-gradient(45deg, ${({ theme }) => theme.accent}22, ${({ theme }) => theme.accentHover}22);
  border-radius: 50%;
  filter: blur(40px);
  
  @media (max-width: 768px) {
    filter: blur(30px);
  }
  
  @media (max-width: 480px) {
    filter: blur(20px);
  }
`;

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: 'easeOut'
      }
    }
  };

  return (
    <HeroSection id="home" ref={ref}>
      <FloatingShape
        style={{
          width: '40vw',
          height: '40vw',
          top: '10%',
          left: '5%',
          y,
          opacity
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
          rotate: [0, 45, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <FloatingShape
        style={{
          width: '35vw',
          height: '35vw',
          bottom: '10%',
          right: '5%',
          y,
          opacity
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
          rotate: [0, -45, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <Title
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        Welcome to <AnimatedText>UniCreators</AnimatedText>
      </Title>
      
      <Subtitle
        variants={subtitleVariants}
        initial="hidden"
        animate="visible"
      >
        We create unique digital experiences that inspire and innovate. 
        Transforming ideas into reality through creative design and cutting-edge technology.
      </Subtitle>
      
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />
    </HeroSection>
  );
};

export default Hero;