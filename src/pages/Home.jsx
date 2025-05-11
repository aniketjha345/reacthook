// import { motion } from 'framer-motion'; // Removed as it's unused
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Testimonials />
    </div>
  );
};

export default Home;