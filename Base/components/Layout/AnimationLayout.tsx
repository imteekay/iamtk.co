import { motion } from 'framer-motion';
import { FC } from 'react';

export const AnimationLayout: FC = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ delay: 1 }}
  >
    {children}
  </motion.div>
);
