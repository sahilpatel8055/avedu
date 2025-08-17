import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

export { render };

async function render(pageContext: any) {
  const { Page, pageProps } = pageContext;
  
  if (!Page) {
    throw new Error('Client-side render() hook expects pageContext.Page to be defined');
  }

  const container = document.getElementById('root');
  if (!container) {
    throw new Error('DOM element #root not found');
  }

  const root = ReactDOM.createRoot(container);
  root.render(
    React.createElement(
      BrowserRouter,
      {},
      React.createElement(Page, pageProps || {})
    )
  );
}