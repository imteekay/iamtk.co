import { FC } from 'react';

import { motion } from 'framer-motion';

export const AnimationLayout: FC = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ delay: 0.3 }}
  >
    {children}
  </motion.div>
);
