"use strict";

import React from 'react';
import ReactDOM from 'react/lib/ReactDOM';

import App from './App';

if (__DEV__) {
  const HMRClient = require('HMRClient');
  HMRClient.enable('web', 'index.web.bundle', 'localhost', 8081);
}

ReactDOM.render(<App />, document.getElementById('root'));
