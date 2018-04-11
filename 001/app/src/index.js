/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
　　IMPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

// core
import React from 'react';
import ReactDOM from 'react-dom';

// css
import './_css/foundation/normalize.css';
import './_css/foundation/default.css';
import './_css/foundation/font.css';

// js
import Question from './_js/Question';

import registerServiceWorker from './_js/registerServiceWorker';

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
　　RENDER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

ReactDOM.render(
  <Question />,
  document.getElementById('app')
);

registerServiceWorker();
