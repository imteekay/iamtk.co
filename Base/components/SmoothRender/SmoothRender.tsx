import { ComponentType, createElement, FC, ReactNode } from 'react';

import { motion, MotionProps } from 'framer-motion';

import { useSettings } from 'Base/components/Settings';

const fadeInMotionProps: MotionProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeIn' },
};

const HEADERS = ['h2', 'h3', 'h4'];

// Tags that render as top-level "blocks" in an article and should fade in as
// the reader scrolls to them.
const FADE_TAGS = [
  'p',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'blockquote',
  'ul',
  'ol',
  'li',
  'hr',
  'table',
  'pre',
];

interface Text {
  props: {
    children: Text;
  };
}

type Children = string | Text | (string | Text)[];

function slugify(children: Children): string {
  if (children == null) return '';

  if (Array.isArray(children)) {
    return children.map((child) => slugify(child)).join('-');
  }

  if (typeof children === 'object') {
    return slugify(children.props.children);
  }

  return String(children)
    .normalize('NFKD') // Return the Unicode Normalization Form of a given string
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\_/g, '-') // Replace _ with -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-/, '') // Remove starting -
    .replace(/\-$/g, ''); // Remove trailing -
}

// `motion` is a proxy that exposes a motion-enabled component for any valid
// HTML tag (motion.p, motion.h2, motion.blockquote, ...).
const motionTags = motion as unknown as Record<
  string,
  ComponentType<Record<string, unknown>>
>;

function createFadeComponent(tag: string) {
  const MotionTag = motionTags[tag];

  const FadeComponent = (props: Record<string, unknown>) => {
    const { settings } = useSettings();

    const id = HEADERS.includes(tag)
      ? slugify(props.children as Children)
      : undefined;

    if (!settings.fadeIn || !MotionTag) {
      return createElement(tag, { ...props, id });
    }

    return <MotionTag {...props} id={id} {...fadeInMotionProps} />;
  };

  FadeComponent.displayName = `FadeComponent(${tag})`;

  return FadeComponent;
}

// Automatically wraps every top-level block tag rendered by MDX with a
// scroll-triggered fade-in, controlled globally via the fade-in setting.
// Pass this into `MDXRemote`'s `components` prop so every article gets the
// effect without needing to opt in per file.
export const fadeComponents: Record<string, ComponentType<unknown>> =
  Object.fromEntries(FADE_TAGS.map((tag) => [tag, createFadeComponent(tag)]));

interface SmoothRenderPropTypes {
  children: ReactNode;
}

// Historically, articles opted into the fade-in effect by wrapping their
// content in `<SmoothRender>`. The effect is now applied automatically via
// `fadeComponents` above, so this is kept only for backwards compatibility
// with existing MDX files that still reference it.
export const SmoothRender: FC<SmoothRenderPropTypes> = ({ children }) => (
  <>{children}</>
);
