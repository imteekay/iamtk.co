import { FC } from 'react';
import { motion } from 'framer-motion';
import { Footer } from 'Base/components/Footer';

export const Layout: FC = ({ children }) => (
  <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{
      type: 'spring',
      stiffness: 260,
      damping: 20,
    }}
  >
    {children}
    <Footer />
  </motion.div>
);
