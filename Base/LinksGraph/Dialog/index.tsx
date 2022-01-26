import MuiDialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import { Layout } from 'Base/LinksGraph/Layout';

type DialogPropsType = {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
};

const DarkDialog = styled(MuiDialog)(() => ({
  '& .MuiPaper-root': {
    'background-color': '#222222',
    color: 'white',
    '& .content': {
      margin: 0,
      padding: '40px',
    },
  },
}));

export const Dialog = ({ onClose, open, title, content }: DialogPropsType) => (
  <DarkDialog fullWidth onClose={onClose} open={open}>
    <Layout title={title}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  </DarkDialog>
);
