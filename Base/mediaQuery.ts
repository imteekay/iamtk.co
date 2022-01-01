type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type MediaQuery = Record<Breakpoints, string>;

export const mediaQuery: MediaQuery = {
  xs: '@media (max-width: 576px)',
  sm: '@media (min-width: 576px)',
  md: '@media (min-width: 768px)',
  lg: '@media (min-width: 992px)',
  xl: '@media (min-width: 1200px)',
};
