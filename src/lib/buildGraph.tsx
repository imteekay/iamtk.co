import { Dispatch, SetStateAction } from 'react';

export const buildGraph = ({
  setId,
  setOpen,
}: {
  setId: Dispatch<SetStateAction<number>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => [
  {
    id: '0',
    data: {
      label: (
        <div
          onClick={() => {
            setId(0);
            setOpen(true);
          }}
        >
          Node 1
        </div>
      ),
    },
    position: { x: 150, y: 350 },
  },
  {
    id: '1',
    data: {
      label: (
        <div
          onClick={() => {
            setId(1);
            setOpen(true);
          }}
        >
          Node 2
        </div>
      ),
    },
    position: { x: 450, y: 525 },
  },
  {
    id: '2',
    data: {
      label: (
        <div
          onClick={() => {
            setId(2);
            setOpen(true);
          }}
        >
          Node 3
        </div>
      ),
    },
    position: { x: 350, y: 150 },
  },
  {
    id: '3',
    data: {
      label: (
        <div
          onClick={() => {
            setId(3);
            setOpen(true);
          }}
        >
          Node 4
        </div>
      ),
    },
    position: { x: 800, y: 100 },
  },
  {
    id: '4',
    data: {
      label: (
        <div
          onClick={() => {
            setId(4);
            setOpen(true);
          }}
        >
          Node 5
        </div>
      ),
    },
    position: { x: 1000, y: 300 },
  },
  {
    id: '5',
    data: {
      label: (
        <div
          onClick={() => {
            setId(5);
            setOpen(true);
          }}
        >
          Node 6
        </div>
      ),
    },
    position: { x: 800, y: 650 },
  },
  { id: 'e0-1', source: '0', target: '1', animated: true },
  { id: 'e0-2', source: '0', target: '2', animated: true },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e1-4', source: '1', target: '4', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
  { id: 'e1-5', source: '1', target: '5', animated: true },
  { id: 'e4-5', source: '4', target: '5', animated: true },
];
