# Accessibility

The intent of this guide is to:

- present an introduction to what is accessibility;
- define the **standards and baselines** to be used as reference when developing accessible PWAs;
- list common accessibility **pitfalls** during PWA development, how to **solve** them and identify them during **code review**;
- suggest patterns to help **authoring accessible components**;
- discuss best practices to be incorporated during the development **process**.

If you have any questions or suggestions, feel free to ping the folks at the [**#accessibility-guild**](https://quintoandar.slack.com/messages/CG18J9X25) channel on Slack. Also feel welcome to join the guild and participate in our bi-weekly meetings.

## Introduction

*Accessible* means easy to approach, reach, enter, speak with, or use. And in computer-human interaction, *accessibility* means making the web accessible and having functionalities that can be operated by literally everyone including those with all forms of disabilities and limitations.

Some forms of disabilities:

- **Physical disabilities** (One that affects a person’s mobility or dexterity)
- **Cognitive or learning disabilities** (People who have a reduced capacity to read, learn tasks or process information)
- **Visual impairments** (People with sight challenges, visually impaired individuals and blind people)
- **Hearing impairments** (Deafness and hearing loss)
- **Neurological disabilities** (Disabilities associated with damage to the nervous system resulting in the loss of some physical or mental functions)

Some forms of limitation or conditional disabilities:

- A broken arm
- Slow internet connection
- Not speaking the local language
- A loud place

## QuintoAndar accessibility standards

### WCAG - Web Content Accessibility Guidelines

The [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) is a set of principles, guidelines, criteria and techniques regarding accessibility in web content. It covers many types of disabilities in a technology-agnostic manner, and although it provides objectives and goals, it does not go in-depth about implementation details.

To measure how much the WCAG accessibility requirements are fulfilled, three **conformance levels** are defined: **A (minimum level), AA (mid range) and AAA (most strict)**.

There are [laws and policies](https://www.w3.org/WAI/policies/) which refer to WCAG. [Most commonly, they are applied to public sector websites and applications](https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines#Legal_obligations), requiring them to meet certain conformance level, usually AA.

Therefore, using **level AA as reference** when using checklists or configuring automated tests is a reasonable approach.

### Screen readers

Today, there are various screen reader softwares available: some are free, others require a paid license; some of them are designed for desktop use, some are mobile-only, some work on both. Between them, there a few differences regarding features and user experiences, like keyboard shortcuts or the way the content is read.

An important point, however, is that **each screen reader might implement or support certain technologies differently**, and by consequence each one will have its set of peculiarities and bugs. When sticking to the best practices and standard recommendations, the vast majority of use cases will work just fine with the most popular ones - thus, it's not expected of anyone to master all screen readers, but instead it's encouraged to learn more about semantics, ARIA, and keyboard navigation for example.

With that said, it's nice to have a set of screen readers to be used as reference for **testing purposes**. All of them are free.

- [NVDA](https://www.nvaccess.org/about-nvda/) (desktop, Windows)
- [VoiceOver](https://help.apple.com/voiceover/info/guide/10.8/English.lproj/index.html) (desktop and mobile, macOD and iOS)
- [TalkBack](https://support.google.com/accessibility/android/answer/6007100?hl=en) (mobile, Android)

An options for developers who use Linux machines is [Orca](https://help.gnome.org/users/orca/stable/introduction.html.en).
[Here](https://docs.google.com/presentation/d/1ZgPv-ssbNbzNfebyaJygsPlyhoxfjUCQDrbDYMjjidI) you can find a tutorial teaching how to begin using Orca.

You can find out data about screen reader usage in Brazil at [Estudo Inclusivo](https://estudoinclusivo.com.br/).

### Tools

The main tool used for accessibility auditing is [axe](https://www.deque.com/axe/), which is available as a [Chrome extension](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd) and as a [Node package](https://github.com/dequelabs/axe-core). It is highly encouraged to use the extension while developing new features. This tool is also used to run automated tests during continuous integration pipelines.

[Lighthouse](https://developers.google.com/web/tools/lighthouse) is a tool which generates not only accessibility audits, but also performance, PWA and SEO reports. It does not report as many issues as axe and the report configurations are not customizable, but the output is very human-friendly, so it's worth checking out the accessibility results when running it for other ends.

## UI and UX design

Many accessibility issues can be detected way before the QA validation, and even before the actual implementation. Here are some points of attention when assessing the accessibility of a web interface or experience:

- **Do not rely *only* on color to convey information**: blind and color-clind users will not be able to understand it. Always pair color with at least another cue, like icons and text;
- **Make sure the text has enough contrast against the background**: pay special attention when text is used over an image, and remember regular-sized body text needs higher contrast than big, bold headings;
- **Mind the typography and spacing when dealing with large blocks of text**: use an appropriate font, an adequate line-height and leave enough white space so the reader has room to breathe without getting tired or confused;
- **Do not remove the focus styles from interactive elements**: this applies to links, buttons and inputs. Peiple who use the keyboard to navigate need to know which element is focused. It is possible to use CSS to change the default appearance or to provide a completely alternate focus style.

This is section not intended to be a design guide, so this list is not comprehensive at all. It is meant to **encourage developers and QAs to raise their concerns about UI and UX accessibility as soon as possible**, closer to the feature conception phase than the deployment and roll-out phases. It's not only about pointing out "interface design bugs", but also about questioning how to implement interactions in an accessible way or estimating how much work will be needed to implement them.

QuintoAndar has [accessibility guidelines for designers](https://www.notion.so/Acessibilidade-A11y-e1fc17b6f5004da98ba894daf3d89706), so check it out for more insights about accessible UI and UX.

### Contrast

This topic deserves its own section, since there are many development tools to help detect contrast issues, thus making it a good example of an acessibility problem that can be identified and resolved by both designers and developers.

It is advised to follow the [WCAG AA contrast threshold](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html). Short-version is:

- Regular text should have a contrast ratio of **4.5:1**;
- Large text should have a contrast ratio of **3:1**;
- Components in an *inactive state*, *decorative* elements, elements that are *not visible to anyone*, and elements that are *part of a picture with other significant visual content* do not need to meet any contrast requirements;
- Elements that are part of a *logo* or *brand name* do not need to meet any contrast requirements.

During implementation, it is possible to check out the contrast of a certain text element against its background by highlighting it with the browser development tools. This feature is available on Chrome and Firefox. Tools such as axe and Lighthouse will also report constrast violations.

Reminder: our Cozy design system has [guidelines for color usage](https://cozy.quintoandar.com.br/?path=/docs/design-colors--page). If you have any question about how to use them in an accessible manner, give a shout-out at [#cozy-dev](https://app.slack.com/client/T03CB1XNT/CKS2HMGCW).

## Semantic HTML

Using [semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML) gives hints to browsers about how to render each page element with its distinct styles and behaviors, like lists and links.

It also brings substantial benefits for accessibility: some native HTML elements have built-in metadata and meaning, helping assistive technologies communicate the page content to their users and instruct them how to interact with it. They already come with keyboard event handling, for example, so there is no need to implement it manually. Bonus points: semantic elements can also impact SEO positively!

Therefore, a simple yet very effective tip to make pages more accesible is to **use semantic markup**.

To better understand the semantics behind each HTML tag, take a look at the [MDN HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

### Don't overuse `<div>` and `<span>`

A simple issue is using generic HTML tags like `<div>` to mimic a semantic element in the DOM. For example using a `<div>` with CSS styles to make it look like a real button. So instead of using this:

```html
<div class="button-ish">Capture Pikachu!</div>
```

Implement a real button element:

```html
<button type="button">Capture Pikachu!</button>
```

When we don't use an actual button element, the screen reader has no way to know what it has landed on.

This works for links too! Use `<a href="https://www.w3schools.com">Visit W3Schools</a>` instead a `<span>` or `<div>` with click event handlers!

### Use `React.Fragment` to wrap items

Using elements such as `<div>` and `<span>` as wrappers will make the HTML less semantic in some contexts, therefore making these pages less accessible. Imagine you are building a list of items. You will probably use `<ul>` and `<li>` for this task. Let's see an example:

```jsx
import React from 'react';

const List = () => (
  <ul>
    <ListItem />
  </ul>
);

const ListItem = () => (
  <div>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </div>
);
```

In the final HTML DOM, we will have this unnecessary `<div>` wrapping the items.

We simply solve this semantic issue by using **[React Fragments](https://reactjs.org/docs/fragments.html)**:

```jsx
import React, { Fragment } from 'react';

const List = () => (
  <ul>
    <ListItem />
  </ul>
);

const ListItem = () => (
  <Fragment>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </Fragment>
);
```

That way, React will not render any div element to wrap the items. `<ul>` will be the `<li>`s wrapper.

### Customize the rendered DOM elements via props

Many UI libraries make it possible to customize the underlying DOM element(s) rendered by a component via its API or props. For example, a standard pattern in [Material UI](https://material-ui.com) is to use the `component` prop to render a different HTML element or React component:

```jsx
<Card component="article">
  Card content here
</Card>
```

Similarly, it's possible to do the same with [Styled Components](https://www.styled-components.com/):

```jsx
const CustomFooter = styled.footer`
  margin: 0;
`;
```

Whenever using a **third-party library**, check the documentation to see if this customization is possible. Most of the time, the default elements rendered on the DOM will be `<div>`s and `<span>`s, which might not be appropriate depending on the use case.

Also, when **creating a reusable component**, make sure to allow this customization on its API.

## Page structure

### Language

Use the `lang` attribute on the `<html>` document, as it will hint the screen readers to switch to the correct language and pronounce it with the appropriate accent.

```html
<html lang="pt-br">
```

### Provide a meaningful and unique `<title>`

The page `<title>` is often the first information read when accessing a website with a screen reader enabled. It is also read when navigating from and to different pages, thus the importance of using unique titles. And again: more bonus points for SEO.

### Element order and hierarchy

By default, screen readers follow the top-down HTML structure when going through the page elements, meaning **order matters: each element is read in the position it appears on the DOM**.

Therefore, when implementing the layout structure, make sure to check the **content hierarchy and order is correct both visually and when read by a screen reader**. Some CSS styles will change the position of elements only visually, like `float` based layouts. This also applies not only to textual content, but also for interactive elements, as inputs and buttons in the wrong order can be quite confusing.

In addition, be careful with **offscreen content**. If it's not visible in the viewport, but still present on the DOM, assistive technology will still pick it up. CSS styles such as `display: none` or `visibility: hidden` can be used to hide them.

### Headings (`<h1>` to `<h6>`)

There are a few good practices regarding the use of headings tags (`<h1>` to `<h6>`):

- Make sure the page has at least a `<h1>`;
- **Do not skip heading levels** - this means going from `<h1>` straight to `<h3>` for example;
- The heading structure should follow some logical hierarchy: `<h1>` is "more important", `<h2>` could be understood as a subsection of `<h1>`, and so on.

Screen reader users can get really familiar to the heading structure of a website and navigate straight to the content they want. Using the headings to create coherent "chunks of information" can potentially speed up the interactions with the application.

## Interactions

### Focus and keyboard events

Focus is an indication of which element - usually a control like an input, checkbox, button or link - will receive keyboard events. To navigate between focusable elements, use the `Tab`  and `Shift + Tab` keys. Interactive elements like the ones mentioned should be focusable, but non-interactive ones like `<div>`s and `<p>`s usually don't need to be accessed by tabbing. Many people do not use a mouse to navigate, so ensuring keyboard navigation is working properly is important for accessibility, and managing focus is essential to achieve that.

The same concerns about DOM order and offscreen content presented on the [Page structure section](#Element-order-and-hierarchy) affect focusable elements. Make sure that elements appear in correct order during tab navigation and offscreen content is not accessible by tabbing.

It is possible to customize the tab behavior of an element using the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) attribute. The most used values are:

- `tabindex="0"`, to insert an element into the natural tab order;
- `tabindex="1"`, to remove it from the natural tab order, while still allowing it to be focusable using the DOM [`focus()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/focus) method.

Using `tabindex` values greater than zero is highly disencouraged. These values make the elements be placed in front of the natural tab order, and can make development and debugging very hard if used on multiple places. The advice is to solve these issues by changing the DOM placement of the elements.

When using native HTML elements, control elements are implicitly focusable, meaning they are automatically added to the tab navigation and handle the keyboard event appropriately. That's why it's always preferred using plain HTML for input components and styling as much as possible with CSS, since developing a custom one from scratch means that all keyboard behavior must be reimplemented as well.

### Action labels

Interactive elements should be correctly labelled, so users know:

- what entity they are related or referring to;
- which actions they perform;
- what values they hold;
- and which states they represent.

Here are some tips on writing effective labels:

- Write **short** labels;
- **Do not include the current state** on the label, since screen readers will read them by default if it's a native HTML element or if the ARIA attributes have been applied correctly. Examples of state: enabled/disabled buttons, valid/invalid inputs, checked/unchecked radios and checkboxes;
- When dealing with icon buttons, describe the **action represented by the icon**, and not what the icon looks like.

## ARIA - Accessible Rich Internet Applications

[WAI-ARIA](https://www.w3.org/TR/wai-aria/) (Web Accessibility Initiative – Accessible Rich Internet Applications), sometimes simply referred as ARIA, is a technical specification with the goal of making web content more accessible.

Some accessibility issues can't be solved by native HTML alone. ARIA specifies attributes that augment and improve the way pages are interpreted by assistive technologies. ARIA attributes do not add any behavior to the elements, so focus management and keyboard handling are still responsibility of the developer. However, they can add labels and descriptions exclusively for screen readers, identify relevant regions and landmarks in a page and express relationships between elements.

### Labels

ARIA provides some ways to add accessible labels and descriptions to elements. `aria-label` is an attribute that allows us to specify a string to be used as an accessible label.

If a button has both text content and an `aria-label`, only the `aria-label` value will be used in screen readers. An example:

```html
<button aria-label="Capture Pikachu!">Click me!</button>
```

The screen reader will read "Capture Pikachu!" instead of "Click me!".

It is also useful when you want to add a text description to some kind of visual indication of an element's purpose. Imagine a "hamburger" menu.

```html
<button class="hamburger"></button>
```

The button uses a graphic representation of a menu. An ARIA label can add a description to the element's purpose, in this case, a menu:

```html
<button class="hamburger" aria-label="Menu"></button>
```

A great example from our PWA is the [Waffle Menu](https://github.com/quintoandar/block-party/blob/master/components/WaffleMenu/AppBar.js#L24). It is a graphic button implemented with Material-UI's `IconButton` without any text content, but the `aria-label` with "Abrir menu principal" makes it accessible to screen readers.

```jsx
<IconButton
  onClick={props.onClose}
  aria-label={props.intl.formatMessage(messages.closeButtonLabel)}>
  <Close nativeColor={props.theme.palette.secondary.contrastText} />
</IconButton>
```

Here is the [full PR](https://github.com/quintoandar/block-party/pull/1076/files) with the implementation.

## Media

It is important to provide text alternatives for media like photos, illustrations and videos, so its content is available to everyone, including visually and hearing-impaired people.

### Images

HTML has a built-in attribute to include alternative text for image elements. We can simply add a string description to the `alt` attribute in the `<img>` tag. **All `<img>` elements should have an `alt` attribute defined**.

```jsx
const imgSrc = '/pikachu.jpg';
const imgAlt = 'Pikachu in a battle with another pokemon';

<img src={imgSrc} alt={imgAlt} />
```

#### Informative images

Here are some tips to improve the alternative text writing:

- Use a **complete short phrase** instead of leaving it at one or two words;
- Be **concise**, long descriptions can throw-off the person navigating the page;
- Include relevant **keywords**, but do not resort to "keyword stuffing";
- If the picture includes text, it could also be included in the description;
- It is not necessary to include the words "image of", "illustration of" - the screen reader will identify them as so.

If you want to include a longer description about the image, consider using a visible `<caption>` right below it. While the alternative text lists and describes the elements present in the picture, the caption content should focus on the context (what, when, where, who). Another form to add more context is through the adjacent text (e.g. paragraphs right before or after the picture). Whichever option is chosen, be careful to **not repeat content** between the alternative text, caption and adjacent text. If enough information is given in a caption or adjacent text, the image might even be considered as decorative.

Talk to your designer and/or product manager to choose the best description for the image.
To learn more about writing image descriptions, check out the [accessibility for designers bootcamp](https://docs.google.com/presentation/d/16iRnZr-RsBH5aWpmObUH1nQkw6i_3GwwJTUK8akbwwo/edit#slide=id.g5f266c855b_0_366).

#### Decorative images

For merely illustrative images such as decorative icons or pictures with no meaningful value, the best practice is to hide them from screen readers.
It can be done with empty alt like `alt=""` or with `aria-hidden=true`. Be careful with `aria-hidden`, because it hides everything inside the element that holds this attribute.

```jsx
<IndicationBenefitIllustration aria-hidden="true" />
```

Full example: [removing illustration on IndicaAí landing page](https://github.com/quintoandar/pwa-tenants/pull/3654/files).

### SVGs

For SVGs, instead of using `alt` like images, the best practice is to use a `<title>` to make it readable to screen readers. The SVG must follow this rule:

- Inside the `<svg>`, add:
  - `<title>A short title of the SVG</title>`
    - must be the first child of it’s parent element
    - will be used as a tooltip when the pointing device moves over it

```jsx
<svg>
  <title>A customized title</title>
  <path .../>
  // ...
</svg>
```

For a full article about accessible SVGs, take a look at the [CSS-Tricks Accessible SVGs post](https://css-tricks.com/accessible-svgs/).

## Third-party libraries

When considering the use of third-party libraries for interface components and interactions, make sure to include **accessibility as one of the criteria while evaluating them**.

Assessing how accessible a library is compared to another might not be so obvious, so here are some tips and points to pay attention to, using [Material-UI](https://material-ui.com/) as an example:

- Search for content about accessibility in the **documentation**; it might be in a section of its own, or could be incorporated into the component and API references, like this [documentation for a Slider component](https://material-ui.com/components/slider/#accessibility);
- If it's an open-source library, go through the **issues and bugs**, as someone might already have reported accessibility-related problems. Some projects have a [tag](https://github.com/mui-org/material-ui/issues?q=is%3Aissue+label%3Aaccessibility) for these issues;
- When information is scarce, checking out the **roadmap** and **contacting the authors** can clear up any remaining doubts;
- If appropriate, **manually test** the library: take advantage of any existing demos or applications that already use it, or implement small proof-of-concepts.

## Testing

### Manual tests

The official [accessibility checklist for QAs](https://docs.google.com/document/d/1CkO8lbJfstOkGLAAtd5nrK8kKcjUmNnpz7_D0VL9iQQ) breaks down manual testing by topics such as semantics, content, media, and accessibility-specific features (skip links, font size configuration. At the end, there is a screen reader cheat sheet with keyboard shortcuts. You can find extra information of how to detect accessibility bugs at [this presentation](https://docs.google.com/presentation/d/17lsDVsy4H7tbIq4w8f6D6yXMYIjOQUOzOzUTqL2y4z0).

Also, Google Web Fundamentals has a practical [keyboard testing guide](https://developers.google.com/web/fundamentals/accessibility/how-to-review#start_with_the_keyboard) with the most important points. It's a simple but effective test to detect accessibility issues, as it can be done while developing a new feature. In short:

- interactive elements should be focusable;
- non-interactive elements should NOT be focusable;
- beware of focus traps: you should be able to escape, close, or navigate away without using a mouse (e.g. modals, autocomplete suggestions).

### Automated tests

It is possible to create integration and end-to-end tests using Cypress to check for accessibility violations. It is done so by using [cypress-axe](https://github.com/avanslaars/cypress-axe), which is basically a wrapper above axe (the same one as the browser extension).

It is strongly advised to make these tests break the CI build in order to prevent regressions. If there are any remaining accessibility issues, especially when creating tests for older pages and apps, it is acceptable to ignore the offending elements while the violations are not solved. This approach blocks other violations from being incorporated into the app.

Examples on how to setup and write these tests are on [pwa-tenants#4732](https://github.com/quintoandar/pwa-tenants/pull/4732) and [owner-pwa#2229](https://github.com/quintoandar/owner-pwa/pull/2229).

### Where to report bugs

Once you found an acessibility bug, [this presentation](https://docs.google.com/presentation/d/1TQj1nosRfx8v2WBQCYyOhQP3vS51sbl-E9VthXIJAKg/) explains how to head it to the high team.

## References

### Standards

- [WCAG - Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) - references and technical resources for all types of web content (warning: this is a very in-depth read)
- [How to Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG21/quickref/) - this provides a lighter way to view the requirement checklists for WCAG, it's quicker to skim through than the full documentation linked above
- [Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria/) - (warning: this is a very in-depth read)

### Checklists

These checklists provide an interpretation of WCAG guidelines in an easier-to-read, strightforward packaging. They are very useful as references during daily development, although the actual WCAG documentation should be checked when researching and implementing policies.

- [WebAIM's WCAG 2 Checklist](https://webaim.org/standards/wcag/checklist)
- [WCAG 2.0 checklists @ WUHCAG](https://www.wuhcag.com/wcag-checklist/)
- [Checklist @ The A11Y Project](https://a11yproject.com/checklist/)
- [Vox Product Accessibility Guidelines](https://accessibility.voxmedia.com/)

### Fundamentals

- [WebAIM](https://webaim.org/) - articles and resources covering a broad variety of topics, written in a friendly way
- [Accessibility @ Google Web Fundamentals](https://developers.google.com/web/fundamentals/accessibility/) - a broad guide covering implementation, testing and team processes, also available as a [Udacity course](https://www.udacity.com/course/web-accessibility--ud891)
- [Accessibility @ MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility) - lots of guides, tutorials and examples
- [Accessibility @ React](https://reactjs.org/docs/accessibility.html) - from the official React documentation
- [4 keys to accessibility](https://dev.to/maxwell_dev/the-web-accessibility-introduction-i-wish-i-had-4ope)
- [Getting started with acessibility in React](https://medium.com/@emilymears/getting-started-with-web-accessibility-in-react-9e591fdb0d52)
- [What's new in web accessibility - Google I/O '18](https://www.youtube.com/watch?v=wkvslBGkhZY)

### Design

- [Accessibility @ Material Design](https://material.io/design/usability/accessibility.html) - guidelines for layout hierarchy, color, written and illustrated content, and other design pillars

### Semantics (HTML built-in & ARIA)

- [Semantic Structure](https://webaim.org/techniques/semanticstructure/)
- [Semantic HTML tags to support Accessibility](https://24ways.org/2017/accessibility-through-semantic-html/)
- [Text Alternates](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/text-alternatives-for-images)
- [Creating Accessible Forms](https://webaim.org/techniques/forms/controls)
- [Accessible SVGs](https://css-tricks.com/accessible-svgs/)

### Content navigation

- [Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
- [Designing for Screen Reader Compatibility](https://webaim.org/techniques/screenreader/)
- [Navigating content](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/navigating-content)

### Components

- [Complete accessibility reference and design patterns for web components](https://www.w3.org/TR/wai-aria-practices/#aria_ex)

### Tooling

- [Chrome Dev Tools - Accessiblity Reference](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference)
- [Lighthouse - Accessiblity Reference](https://developers.google.com/web/tools/lighthouse/audits/button-name)
- [Automated UI accessibility testing with Cypress](https://medium.com/maxime-heckel/automated-ui-accessibility-testing-with-cypress-cc2e38231241)
- [Accessibility auditing with react-axe and eslint-plugin-jsx-a11y](https://web.dev/accessibility-auditing-react/)

## Guideline roadmap

This is a roadmap of topics to be researched and improvements to the current content.

- Add more illustrations and examples
- Inputs
- Authoring accessible components
- Testing with a screen reader
- Accessibility tree
- Skip links
- Motion
- Sound
