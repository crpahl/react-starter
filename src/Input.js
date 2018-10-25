/* eslint no-param-reassign: ["error", { "props": false }] */
import React, { Component } from 'react';
import { withDB } from 'react-pouchdb';

export default withDB(({ db }) => (
  <input
    autoFocus
    onKeyDown={({ keyCode, target }) => {
      const title = target.value.trim();
      if (keyCode === 13 && title) {
        db.post({ title, timestamp: Date.now() });
        target.value = '';
      }
    }}
    placeholder="What needs to be done?"
    type="text"
  />
));