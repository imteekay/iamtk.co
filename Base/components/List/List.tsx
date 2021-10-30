import { FC } from 'react';
import { Title } from '../Title';
import { Item, ItemProps } from './Item';
import { titleLinkStyle, listStyle } from './style';

type ListPropType = {
  sectionId: string;
  titleLink: string;
  titleText: string;
  list: ItemProps[];
};

export const List: FC<ListPropType> = ({
  sectionId,
  titleLink,
  titleText,
  list,
}) => (
  <section id={sectionId}>
    <a
      href={titleLink}
      target="_blank"
      rel="noopener noreferrer"
      style={titleLinkStyle}
    >
      <Title text={titleText} />
    </a>
    <ul style={listStyle}>
      {list.map((item) => (
        <Item
          key={item.link}
          title={item.title}
          description={item.description}
          link={item.link}
        />
      ))}
    </ul>
  </section>
);
