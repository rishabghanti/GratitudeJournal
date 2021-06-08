import React from 'react';
import './PageDate.css';

export default class PageDate extends React.Component {
constructor(props) {
  super(props);

  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const date = new Date();
  const dateString = date.getDate() +"th " + monthNames[date.getMonth()] + " " +date.getFullYear();

  this.state = {
    "date" : dateString
  }
}

  render() {
    return(
      <div className = "date">
        <p>{this.state.date}</p>
      </div>
      );
  }
}
