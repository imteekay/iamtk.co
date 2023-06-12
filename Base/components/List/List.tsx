import { FC } from 'react';

import { Item, ItemProps } from './Item';
import { titleLinkStyle, listStyle } from './style';
import { Title } from 'Base/components/Title';
import { titleStyle } from 'Base/components/Title/style';

type Header = 'h1' | 'h2';

type ListPropType = {
  sectionId: string;
  titleLink: string;
  titleText: string;
  list: ItemProps[];
  openNewTab: boolean;
  header?: Header;
};

export const List: FC<ListPropType> = ({
  sectionId,
  titleLink,
  titleText,
  list,
  openNewTab,
  header = 'h2',
}) => {
  const linkAttr = openNewTab
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : { target: '', rel: '' };

  return (
    <section id={sectionId}>
      {header === 'h2' ? (
        <a
          href={titleLink}
          target={linkAttr.target}
          rel={linkAttr.rel}
          style={titleLinkStyle}
        >
          <h2 className={titleStyle}>{titleText}</h2>
        </a>
      ) : (
        <Title text={titleText} />
      )}
      <ul style={listStyle}>
        {list.map((item) => (
          <Item
            key={item.link}
            title={item.title}
            description={item.description}
            link={item.link}
            target={item.target}
            rel={item.rel}
          />
        ))}
      </ul>
    </section>
  );
};
