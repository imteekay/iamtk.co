import type { NextPage } from 'next';
import ReactFlow from 'react-flow-renderer';

const elements = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },
  {
    id: '2',
    data: { label: <div onClick={() => alert('testing')}>Default Node</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
  },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3' },
];

const Page: NextPage = () => (
  <div style={{ height: 300 }}>
    <ReactFlow elements={elements} />
  </div>
);

export default Page;
