import { FC } from 'react';

import { css } from '@emotion/css';

import { ShareButtons } from 'Base/Article/SocialLinks';
import { Tags } from 'Base/Article/Tags';
import { SubstackEmbed } from 'Base/Community/SubstackEmbed';
import { mediaQuery } from 'Base/mediaQuery';
import { Tag } from 'src/lib/getPostMetadata';

type FooterPropTypes = {
  tags: Tag[];
};

export const Footer: FC<FooterPropTypes> = ({ tags }) => (
  <>
    <SubstackEmbed />
    <div
      className={css`
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 20px;

        ${mediaQuery['sm']} {
          flex-direction: row;
        }
      `}
    >
      <Tags tags={tags} />
      <ShareButtons />
    </div>
  </>
);
