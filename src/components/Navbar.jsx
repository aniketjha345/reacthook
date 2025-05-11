import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: clamp(1rem, 3vw, 1.5rem) clamp(1rem, 5vw, 2rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.navBackground};
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 2px 10px ${({ theme }) => theme.shadow};
  height: auto;
  min-height: 60px;
`;

const Logo = styled(motion.div)`
  font-size: clamp(1.2rem, 4vw, 1.5rem);
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  
  span {
    color: ${({ theme }) => theme.accent};
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const MenuButton = styled(IconButton)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavLinks = styled(motion.div)`
  display: flex;
  gap: clamp(1rem, 4vw, 2rem);
  
  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.navBackground};
    backdrop-filter: blur(10px);
    padding: 2rem;
    gap: 1.5rem;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
    transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-20px')});
    transition: all 0.3s ease-in-out;
  }
`;

const NavLinkStyled = styled(motion(RouterNavLink))`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: clamp(0.9rem, 2vw, 1rem);
  position: relative;
  padding: clamp(0.3rem, 2vw, 0.5rem) clamp(0.5rem, 3vw, 1rem);
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.accent};
    transition: width 0.3s ease;
  }
  
  &.active {
    color: ${({ theme }) => theme.accent};
  }
  
  &:hover:after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 1rem;
    border-radius: 8px;
    
    &.active {
      color: ${({ theme }) => theme.accent};
    }
    
    &:hover {
      background: ${({ theme }) => `${theme.accent}20`};
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <Nav>
      <Logo
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Uni<span>Creators</span>
      </Logo>
      
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <IconButton onClick={toggleTheme} aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}>
          {isDark ? <FiSun /> : <FiMoon />}
        </IconButton>
        
        <MenuButton onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"}>
          {isOpen ? <FiX /> : <FiMenu />}
        </MenuButton>
      </div>
      
      <NavLinks
        isOpen={isOpen}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <NavLinkStyled
          to="/"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLinkStyled>
        <NavLinkStyled
          to="/services"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(false)}
        >
          Services
        </NavLinkStyled>
        <NavLinkStyled
          to="/portfolio"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(false)}
        >
          Portfolio
        </NavLinkStyled>
        <NavLinkStyled
          to="/projects"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(false)}
        >
          Projects
        </NavLinkStyled>
        <NavLinkStyled
          to="/testimonials"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(false)}
        >
          Testimonials
        </NavLinkStyled>
        <NavLinkStyled
          to="/contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </NavLinkStyled>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;