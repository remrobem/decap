import Head from 'next/head';
import { Component } from 'react';
import { attributes, react as HomeContent } from '../content/home.md';
import Script from 'next/script';

export default class Home extends Component {
  render() {
    let { title, cats } = attributes;
    return (
      <>
        <Script src='https://example.com/script.js' />
        <Head>
          {/* <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script> */}
        </Head>
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    );
  }
}
