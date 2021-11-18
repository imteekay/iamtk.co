import { FC } from 'react';
import Image from 'next/image';
import Highlight from 'react-highlight';
import { sourceCode1, sourceCode2, sourceCode3 } from './sourceCode';

export const Article: FC = () => (
  <>
    <p>
      A few months ago I wrote a blog post about my latest project working on{' '}
      <a href="https://leandrotk.github.io/2021/04/dx-and-software-maintainability-in-frontend-engineering">
        developer experience and software maintainability in frontend
        engineering
      </a>
      . I started exploring many problems and opportunities in our current
      frontend application and one of my focuses was how we currently build the
      frontend and improve the foundation. Things like error handling, data
      fetching, state management, web performance, and so on.
    </p>
    <p>
      Among all these topics, I started{' '}
      <a href="https://leandrotk.github.io/2021/06/data-fetching-in-react-with-reactquery">
        exploring data fetching solutions
      </a>{' '}
      and got to build PoCs (Proofs-of-Concept) for react-query to test various
      use cases in our application. Together with a colleague, we wrote an ADR
      (Architecture Design Record) to spread the adoption idea and how it would
      change our current architecture (our apps heavily use Redux for client
      state management and server cache).
    </p>
    <p>
      After the adoption, we are now in a phase that different use cases are
      showing up. The idea is to help architect solutions for these different
      challenges and write down documents to guide the entire organization.
    </p>
    <h2 id="asimpledependentquery">A simple Dependent Query</h2>
    <p>
      react-query has a simple declarative way to handle dependent queries: a
      parameter called <code>enabled</code>. The react-query doc shows an
      example:
    </p>
    <Highlight>{sourceCode1}</Highlight>
    <p>
      The first query requests the user based on the email. And the query that
      requests the projects depends on the user id, got from the previous
      request. The query will only request if the <code>userId</code> exists.
    </p>
    <p>
      We can use these two hooks in the same component and make the later
      triggers only if the first succeeds and return the user data to be used
      later on.
    </p>
    <h2 id="amorecomplexdependentquery">A more complex Dependent Query</h2>
    <p>
      The Landlord Landing Page has a complex form and it requires dependent
      queries for its requests. It looks like this:
    </p>
    <p>
      <Image
        src="/react-query-complex-dependent-queries/diagram.png"
        alt="a diagram of the data fetching flow"
        width="592"
        height="432"
      />
    </p>
    <p>
      When the user fills the CEP/Zipcode, it requests the CEP data in the BFF
      (Backend For Frontend) service to get the address-related data and use it
      to request the GooglePlace API.
    </p>
    <p>
      The GooglePlace API requests more data related to the address,
      specifically the latitude and longitude to query the region‘s data in the
      BFF‘s API.
    </p>
    <p>The form fields component declares all these three queries:</p>
    <Highlight className="javascript">{sourceCode1}</Highlight>
    <p>
      We first query the CEP data and pass it to the{' '}
      <code>useGooglePlaceAPI</code> hook and there you can enable or disable
      the google place API query:
    </p>
    <Highlight className="javascript">{sourceCode2}</Highlight>
    <p>
      The google place API request only triggers if it has the{' '}
      <code>completeAddress</code>.
    </p>
    <p>
      After getting the latitude and longitude, we can request the region API:
    </p>
    <Highlight className="javascript">{sourceCode3}</Highlight>
    <p>
      It works very similarly to the previous hook. To trigger the{' '}
      <code>fetchRegion</code> request, it needs to have the <code>lat</code>{' '}
      and <code>lng</code> parameters. We verify them to enable the query.
    </p>
    <h2 id="finalwords">Final words</h2>
    <p>
      react-query solves data fetching in a very simple way with a nice API. It
      makes complex topics live revalidation, server cache, and dependent
      queries easier to implement.
    </p>
    <p>
      It has been the obvious solution for me when it comes to this specific
      data fetching challenge.
    </p>
    <h2 id="resources">Resources</h2>
    <ul>
      <li>
        <a href="https://react-query.tanstack.com/guides/dependent-queries">
          Doc: Dependent Queries
        </a>
      </li>
      <li>
        <a href="https://leandrotk.github.io/2021/04/dx-and-software-maintainability-in-frontend-engineering/">
          DX & Software Maintainability in Frontend Engineering
        </a>
      </li>
      <li>
        <a href="https://leandrotk.github.io/2021/06/data-fetching-in-react-with-reactquery/">
          Data Fetching in React with react-query
        </a>
      </li>
    </ul>
  </>
);
