import React from 'react';
import '../design/form.scss';
const superagent = require('superagent');


class Form extends React.Component { 
  constructor(props) {
    super(props);
    this.state = { method: '', url: '', loading: false};
    this.updateUrl = this.updateUrl.bind(this);
    this.updateMethod = this.updateMethod.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  updateUrl(event) {
    this.setState({ url: event.target.value });
  }
  updateMethod(event) {
    this.setState({ method: event.target.value });
  }

  handleForm(e) {
    e.preventDefault();
    this.setState({ loading: true });
    let apiUrl = this.state.url;
    if (this.state.method === 'GET') {
      superagent.get(apiUrl)
        .then(data => {
          this.setState({ loading: false });
          if (data.body !== null) {
            let searchObj = { method: this.state.method, url: this.state.url, body: data.body};
            localStorage.setItem(this.state.url, JSON.stringify(searchObj));
            this.props.handleSubmit(data);
          }
        }).catch(e => {
          this.setState({ loading: false });
          console.error(e);});
    }
  }

  render() {
    return (
      <form data-testid="form" className="form" onSubmit={this.handleForm}>
        <fieldset>
          <legend>Enter your URL</legend>
          <label htmlFor="URL">URL:</label>
          <input onChange={this.updateUrl} type="text" id="url" placeholder="url" name="url" />
        </fieldset>
        <fieldset>
          <legend>Method</legend>
          <input onClick={this.updateMethod} type="radio" id="post" name="method" value="POST" defaultChecked />
          <label htmlFor="post">POST</label>
          <input onClick={this.updateMethod} type="radio" id="put" name="method" value="PUT" />
          <label htmlFor="put">PUT</label>
          <input onClick={this.updateMethod} type="radio" id="get" name="method" value="GET" />
          <label htmlFor="get">GET</label>
          <input onClick={this.updateMethod} type="radio" id="delete" name="method" value="DELETE" />
          <label htmlFor="delete">DELETE</label>
        </fieldset>
        <fieldset><legend>Your Request</legend>
          {this.state.method} : {this.state.url}
        </fieldset>
        {this.state.loading ? < img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loading" /> : <input id="submit" type="submit" value="Submit"></input>}
      </form>
    );
  }
}

export default Form;