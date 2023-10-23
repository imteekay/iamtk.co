import { FC } from 'react';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const MotionWrapper = styled(motion.div)`
  // width: 100%;
  // height: 100%;
`;

export const AnimationLayout: FC = ({ children }) => (
  <MotionWrapper
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ delay: 0.3 }}
  >
    {children}
  </MotionWrapper>
);
