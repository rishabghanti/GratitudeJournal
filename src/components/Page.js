import React from 'react';
import PageDate from './PageDate';
import Title from './Title';
import JournalText from './JournalText';
import './PageDate.css'
import './Page.css';
import './JournalText.css'

export default class Page extends React.Component {
  render() {
    return(
      <div className = "page">
        <div className = "date">
          <PageDate></PageDate>
        </div>
        <div className = "title">
          <Title></Title>
        </div>
        <div className = "journalText">
          <JournalText></JournalText>
        </div>
      </div>
      );
  }
}
