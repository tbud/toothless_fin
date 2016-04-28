"use strict";

import React from 'react';
import ReactDOM from 'react/lib/ReactDOM';

import App from './App';

if (__DEV__) {
  const HMRClient = require('HMRClient');
  if (window.location) {
    let loc = window.location;
    HMRClient.enable('web', 'index.web.bundle', loc.hostname, loc.port);
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
