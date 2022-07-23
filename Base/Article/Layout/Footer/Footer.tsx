import { FC } from 'react';
import { css } from '@emotion/css';
import { SubstackEmbed } from 'Base/Community/SubstackEmbed';
import { ShareButtons } from 'Base/Article/SocialLinks';
import { Tags } from 'Base/Article/Tags';
import { Sponsorship } from 'Base/Article/Sponsorship/Sponsorship';
import { mediaQuery } from 'Base/mediaQuery';
import { Tag } from 'src/lib/getPostMetadata';

type FooterPropTypes = {
  tags: Tag[];
};

const Footer: FC<FooterPropTypes> = ({ tags }) => (
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

    <Sponsorship />
  </>
);

export default Footer;
