import { useEffect } from 'react';

export const useReactFlowAttributionRemoval = () => {
  useEffect(() => {
    document.querySelector('.react-flow__attribution')?.remove();
  }, []);
};
