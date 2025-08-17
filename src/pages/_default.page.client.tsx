import React from 'react';
import ReactDOM from 'react-dom/client';

export { render };

async function render(pageContext: any) {
  const { Page, pageProps } = pageContext;
  
  if (!Page) {
    throw new Error('Client-side render() hook expects pageContext.Page to be defined');
  }

  const container = document.getElementById('react-root');
  if (!container) {
    throw new Error('DOM element #react-root not found');
  }

  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(Page, pageProps || {}));
}