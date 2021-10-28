type SkipLink = {
  position: 'absolute';
  top: string;
  left: number;
  background: string;
  color: string;
  padding: string;
  zIndex: number;
};

export const skipLink: SkipLink = {
  position: 'absolute',
  top: '-40px',
  left: 0,
  background: '#000000',
  color: 'white',
  padding: '8px',
  zIndex: 100,
};
