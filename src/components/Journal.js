import React from 'react';
import Page from './Page';
import './Journal.css';

export default class Journal extends React.Component {
  render() {
    return(
      <div className = "journal">
        <Page></Page>
      </div>
      );
  }
}
