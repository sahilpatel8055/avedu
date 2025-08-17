import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import { StaticRouter } from 'react-router-dom/server';

export { render };
export { passToClient };

const passToClient = ['pageProps', 'urlPathname'];

async function render(pageContext: any) {
  const { Page, pageProps } = pageContext;
  
  if (!Page) {
    throw new Error('My render() hook expects pageContext.Page to be defined');
  }

  const pageHtml = ReactDOMServer.renderToString(
    React.createElement(
      StaticRouter,
      { location: pageContext.urlPathname || '/' },
      React.createElement(Page, pageProps || {})
    )
  );

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports || {};
  const title = (documentProps && (documentProps as any).title) || 'AVEDU - Online Distance Learning Education';
  const desc = (documentProps && (documentProps as any).description) || 'Explore top-rated online and distance learning programs from accredited universities. Get your degree with flexible schedules, expert faculty, and industry-relevant curriculum.';

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${desc}" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://avedu.co.in${pageContext.urlPathname || ''}" />
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  };
}