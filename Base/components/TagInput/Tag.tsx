import { Button } from './Button';
import { Label } from './Label';

interface TagPropTypes {
  tagId: string;
  tag: string;
}

export const Tag = ({ tagId, tag }: TagPropTypes) => (
  <span
    style={{ border: '1px solid', padding: '4px', display: 'flex', gap: '6px' }}
  >
    <Label>{tag}</Label>
    <Button tagId={tagId} />
  </span>
);
