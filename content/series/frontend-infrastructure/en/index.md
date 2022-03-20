## Introduction

Frontend Infrastructure teams empower product teams with the foundational frontend ecosystem and reliable, performant, and developer-friendly tools to efficiently build great user experiences.

This introduction covers tools to build a mental model around frontend infrastructure: techniques and strategies, skills, and additional resources.

### Techniques and Strategies

When thinking about developing the frontend infrastructure for product teams, there are a lot of different possibilities and actions we can do. This is a collection of techniques and strategies to help modeling the roadmap for frontend infrastructure teams.

- `Move core metrics`: developer experience, developer velocity, debuggability, performance, and reliability
- `Enhance developer productivity` by improving the tooling setup
  - Linting: enforce best practices with static analysis and eslint rules
  - Unit and end to end tests
  - Deployment: continuous integration and continuous delivery
  - Type System: consistent and less-risky applications
  - Shared Configurations: create infrastructure so teams can start building new frontend applications without needing to know tricky configuration details
  - Build System: bundling frontend applications
- `Testing`: Infrastructure and testing framework integrations enabling developers to write a comprehensive set of unit, integration, and end-to-end tests
- `Observability`: Client-side web logging libraries, integration with vendor error monitoring solutions, alert generators for standard web metrics as well as their usage in automated canary analysis, and testing solutions to ensure logging quality
- `Shape the architecture` of frontend systems
  - Define patterns for UIs (design system)
  - Define patterns for data fetching
  - Define patterns for frontend-backend relation: graphql, BFF, rest APIs
- Make platform-wide changes and `upgrade the entire codebase`
  - Replace old libraries with new standards
- Build a strong culture with the `foundational platform knowledge`
  - Partnering with product teams to encourage adoption of tools and frameworks
  - Share your experiences and expertise with those around you, and multiply your impact through thoughtful teaching, influencing, and setting examples.
- Improve end-user experience by building infrastructure to `support UX consistency` across products
  - Optimize the client-side performance of web applications
  - Support teams to build consistent experiences through design systems
  - Monitoring systems: monitoring errors in the application
- `Research` and test new languages, libraries and frameworks and evaluate their potential to make sure we never stop innovating.
  - Understand developer pain points and common questions in frontend development, and aim to improve or answer them.
  - Enable different product teams to be more productive by identifying similar features or tasks across teams and making improvements in the frontend stack or processes
  - Engagement in the JavaScript ecosystem/community: understand the ever-evolving JS landscape to proactively ensure the rest of the organization is maintaining a technically healthy product.
- `Build tools` and drive initiatives to ensure best practices across teams as well as maximize developer productivity and experience
  - Provide teams with visibility into their test coverage and frontend performance
  - Build tools and processes to increase automated testing adoption in the org
  - Build tooling to provide teams with visibility into their test coverage and frontend performance
  - CLIs

### Skills

To begin with, it's not a checklist we need to check each item to consider ourselves able to do frontend infrastructure work, but a set of skills we should strive to have to close the knowledge gap that's missing for each one of us.

- Knowledge/Deep understanding of modern frontend tech stack: HTML, CSS, JavaScript (ECMAScript), JS frameworks, type systems, package management, module bundling, unit and integration testing, browser capabilities.
- Knowledge/Deep understanding of validation (CI) and deployment (CD) automation tools: Jenkins, AWS CodePipeline, TravisCI, CircleCI, DroneCI, etc and/or Shell/Bash script.
- Knowledge/Deep understanding of reusable UI components: implementing WCAG (Web Content Accessibility Guidelines) and consistent design principles.
- Knowledge/Deep understanding of web bundlers and its surrounding technologies (modules, plugins, compiler hooks, loaders, etc).
- Knowledge/Deep understanding of systems and scalability: their edge cases, failure modes, and lifecycles.
- Knowledge/Deep understanding of web performance: metrics, tools, optimizations, architecture.
- Knowledge/Deep understanding of developer experience: metrics, tools, strategies, mindset.
- Knowledge/Deep understanding of frontend architecture: frontend layers — presentation, application, domain, infrastructure.

- [Frontend Infrastructure: Resources](/series/frontend-infrastructure/resources)

<div class="series">

## Studies, Research & Experiments

The research and experiments I've been doing and documenting about frontend infrastructure in posts format.

### Mastering JavaScript

- <time class="date">2022-01-03</time> <span>[Revisiting Conditionals in JavaScript and TypeScript](/series/mastering-javascript/revisiting-conditionals-in-javascript-and-typescript)</span>
- <time class="date">2022-01-10</time> <span>[Destructuring Arrays and Objects in JavaScript](/series/mastering-javascript/destructuring-objects-and-arrays)</span>

### TypeScript Learnings

- <time class="date">2020-07-19</time> <span>[A Mental Model to think in TypeScript](/a-mental-model-to-think-in-typescript)</span>
- <time class="date">2020-04-05</time> <span>[Object Destruturing](/series/typescript-learnings/object-destructuring)</span>
- <time class="date">2020-04-25</time> <span>[Type System](/series/typescript-learnings/type-system)</span>
- <time class="date">2020-05-09</time> <span>[Interesting Types](/series/typescript-learnings/interesting-types)</span>
- <time class="date">2020-05-23</time> <span>[Union Types with Objects](/series/typescript-learnings/union-types-with-objects)</span>

### Modules and Bundlers

- <time class="date">2022-03-10</time> <span>[Frontend Infrastructure: JavaScript as Scripts](/series/frontend-infrastructure/javascript-as-scripts)</span>
- <time class="date">2022-03-10</time> <span>[Frontend Infrastructure: Scope & Closure](/series/frontend-infrastructure/scope-and-closure)</span>
- <time class="date">2022-03-10</time> <span>[Frontend Infrastructure: IIFE](/series/frontend-infrastructure/iife-immediately-invoked-function-expression)</span>
- <time class="date">2022-03-10</time> <span>[Frontend Infrastructure: Namespaces](/series/frontend-infrastructure/namespaces)</span>
- <time class="date">2022-03-10</time> <span>[Frontend Infrastructure: ESModules & CommonJS](/series/frontend-infrastructure/esmodules-and-commonjs)</span>

### Frontend Architecture

- <time class="date">2021-12-27</time> <span>[Frontend Challenges: Room Selector Dialog](/series/frontend-challenges/findhotel-frontend-challenge)</span>
- <time class="date">2021-06-13</time> <span>[Rebuilding a Search product](/series/rebuilding-mercaris-search)</span>
- <time class="date">2021-06-05</time> <span>[Data Fetching in React with react-query](/data-fetching-in-react-with-react-query)</span>

### Web Performance

- <time class="date">2021-04-04</time> <span>[Optimizing the Performance of a React Progressive Web App](/optimizing-the-performance-of-a-react-progressive-web-app)</span>
- <time class="date">2021-01-19</time> <span>[Performance: Prefetch Next Pages Chunks](/performance-prefetch-next-pages-chunks)</span>

### Developer Experience

- <time class="date">2021-04-04</time> <span>[DX & Software Maintainability in Frontend Engineering](/dx-and-software-maintainability-in-frontend-engineering)</span>

## Keep up-to-date

To keep up-to-date with the study and research, follow the experiments on the [Frontend Infrastructure](https://github.com/imteekay/frontend-infrastructure) github repository.

Or follow me on social media below:

</div>
