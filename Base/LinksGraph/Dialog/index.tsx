import MuiDialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import { useTheme } from 'next-themes';

import { Layout } from 'Base/LinksGraph/Layout';

type DialogPropsType = {
  open: boolean;
  onClose: () => void;
  title?: string;
  content: string;
};

const DarkDialog = styled(MuiDialog)<{ prefersDarkMode: boolean }>(
  ({ theme, prefersDarkMode }) => ({
    '& .MuiPaper-root': {
      'background-color': prefersDarkMode ? '#222222' : 'white',
      'max-width': '700px',
      color: prefersDarkMode ? 'white' : 'black',
      '& .content': {
        margin: 0,
        padding: '40px 20px',
        'max-width': 'none',
        [theme.breakpoints.up('md')]: {
          padding: '40px',
        },
        '& ul': {
          'padding-left': '4px',
        },
        '& li': {
          display: 'block',
        },
      },
    },
  }),
);

export const Dialog = ({ onClose, open, title, content }: DialogPropsType) => {
  const { resolvedTheme } = useTheme();
  const prefersDarkMode = resolvedTheme === 'dark';

  return (
    <DarkDialog
      fullWidth
      onClose={onClose}
      open={open}
      prefersDarkMode={prefersDarkMode}
    >
      <Layout title={title}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Layout>
    </DarkDialog>
  );
};
