import React from 'react';
import Page from './Page';
import './Journal.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

class Journal extends React.Component {
  render() {
    return(
      <div className = "journal">
        <Page></Page>
        <h1>We now have Auth!</h1>
        <AmplifySignOut />
      </div>
      );
  }
}

export default withAuthenticator(Journal)
