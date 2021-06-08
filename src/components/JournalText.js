import React from 'react';
import './JournalText.css'

export default class JournalText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gratitude1 : "",
      gratitude2 : "",
      gratitude3 : ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
      });
  }

  handleSubmit(event) {
    alert("Submitting the values " +this.state.gratitude1 +" " +this.state.gratitude2);
  }


  render() {
    return(
      <div className = "journalText">
        <form onSubmit={this.handleSubmit}>
          <label className = "JournalTextLabel">
            1:
            <textarea className = "journalTextArea" type="text" name = "gratitude1" value={this.state.gratitude1} onChange={this.handleChange} />
          </label>
          <label className = "JournalTextLabel">
            2:
            <textarea className = "journalTextArea" type="text" name = "gratitude2" value={this.state.gratitude2} onChange={this.handleChange} />
          </label>
          <label className = "JournalTextLabel">
            3:
            <textarea className = "journalTextArea" type="text" name = "gratitude3" value={this.state.gratitude3} onChange={this.handleChange} />
          </label>
          <input className = "journalTextSubmit" type="submit" value="Submit" />
        </form>
      </div>
      );
  }
}
