"use strict";

import html from "choo/html";

export default () => {
  return html`
    <div class="api__header page__markup">
      <h1>lbry-sdk APIs</h1>
      <p>
        Methods and signatures provided by the <a href="/glossary#lbry-sdk">lbry-sdk</a> daemon are documented below. 
        To build, download, or run the daemon, see the project <a href="https://github.com/lbryio/lbry/blob/master/README.md">README</a>.
        </p>
    </div>
  `;
};
