import { ReactNode } from 'react';

interface LabelPropTypes {
  children: ReactNode;
}

export const Label = ({ children }: LabelPropTypes) => <span>{children}</span>;
