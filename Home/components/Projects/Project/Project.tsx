import type { NextPage } from 'next';
import { projectItemStyle, linkStyle } from './style';

type ProjectProps = {
  link: string;
  title: string;
  description: string;
};

export const Project: NextPage<ProjectProps> = ({
  link,
  title,
  description,
}: ProjectProps) => (
  <li style={projectItemStyle}>
    <strong>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        {title}
      </a>
    </strong>
    : {description}
  </li>
);
