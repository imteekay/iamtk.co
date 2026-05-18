import { Children, ReactNode, createElement, isValidElement, useEffect, useState } from 'react';

import { css } from '@emotion/css';
import { useInView } from 'react-intersection-observer';

interface SmoothRenderPropTypes {
  children: JSX.Element[];
}

interface SmoothRenderElementPropTypes {
  children: JSX.Element;
}

const smoothRenderElementStyle = ({ render }: { render: boolean }) => css`
  transition-timing-function: ease;
  transition-duration: 0.6s;
  transition-delay: 0.124927s;
  opacity: ${render ? '1' : '0'};
`;

const HEADERS = ['h2', 'h3', 'h4'];

interface Text {
  props: {
    children: Text;
  };
}

type Children = string | Text | (string | Text)[];

function slugify(children: Children): string {
  if (Array.isArray(children)) {
    return children.map((child) => slugify(child)).join('-');
  }

  if (typeof children === 'object') {
    return slugify(children.props.children);
  }

  return children
    .normalize('NFKD')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\_/g, '-')
    .replace(/\-\-+/g, '-')
    .replace(/^-/, '')
    .replace(/\-$/g, '');
}

const HTML_ATTR_MAP: Record<string, string> = {
  class: 'className',
  allowfullscreen: 'allowFullScreen',
  crossorigin: 'crossOrigin',
  tabindex: 'tabIndex',
  readonly: 'readOnly',
  maxlength: 'maxLength',
  minlength: 'minLength',
  autocomplete: 'autoComplete',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  enctype: 'encType',
  usemap: 'useMap',
};

const BOOLEAN_STRING_ATTRS = new Set([
  'controls', 'autoplay', 'muted', 'loop', 'allowfullscreen',
  'allowFullScreen', 'disabled', 'checked', 'selected', 'multiple',
]);

function normalizeProps(props: Record<string, unknown>): Record<string, unknown> {
  const normalized: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(props)) {
    const newKey = HTML_ATTR_MAP[key] ?? key;
    const newValue = BOOLEAN_STRING_ATTRS.has(key) && value === 'true' ? true : value;
    normalized[newKey] = newValue;
  }
  return normalized;
}

function normalizeElement(node: ReactNode): ReactNode {
  if (!isValidElement(node)) return node;

  const props = node.props as Record<string, unknown>;
  const normalizedProps = normalizeProps(props);

  if (props.children != null) {
    normalizedProps.children = Children.map(
      props.children as ReactNode,
      normalizeElement,
    );
  }

  return createElement(node.type as string, normalizedProps);
}

const SmoothRenderElement = ({ children }: SmoothRenderElementPropTypes) => {
  const [render, setRender] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const className = smoothRenderElementStyle({ render });

  const id = HEADERS.includes(children.type)
    ? slugify(children.props.children)
    : null;

  useEffect(() => {
    if (inView) {
      setRender(inView);
    }
  }, [inView]);

  const props = children.props as Record<string, unknown>;
  const normalizedChildren = normalizeElement(
    createElement(children.type, {
      ...normalizeProps(props),
      className: [props.class, props.className, className]
        .filter(Boolean)
        .join(' '),
      id,
      children: props.children,
    }),
  );

  return (
    <>
      <div ref={ref} style={{ minHeight: '0px', visibility: 'hidden' }} />
      {normalizedChildren}
    </>
  );
};

export const SmoothRender = ({ children }: SmoothRenderPropTypes) =>
  children.map((child, id) => (
    <SmoothRenderElement key={id}>{child}</SmoothRenderElement>
  ));
