import React from 'react';

class Form extends React.Component { 
  constructor(props) {
    super(props);
    this.state = { method: 'get', url: '', data: ''};
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
    let apiUrl = this.state.url;
    fetch(apiUrl)
      .then(data => {
        console.log('back from fetch', data);
        this.props.handleSubmit(data);
      });
  }

  render() {
    return (
      <main>
        <form data-testid="form" onSubmit={this.handleForm}>
          <fieldset>
            <legend>Enter your URL</legend>
            <label htmlFor="URL">URL:</label>
            <input onChange={this.updateUrl} type="text" id="url" name="url" />
          </fieldset>
          <fieldset>
            <legend>Method</legend>
            <input onClick={this.updateMethod} type="radio" id="post" name="method" value="post" defaultChecked />
            <label htmlFor="post">POST</label>
            <input onClick={this.updateMethod} type="radio" id="put" name="method" value="put" />
            <label htmlFor="put">PUT</label>
            <input onClick={this.updateMethod} type="radio" id="get" name="method" value="get" />
            <label htmlFor="get">GET</label>
            <input onClick={this.updateMethod} type="radio" id="delete" name="method" value="delete" />
            <label htmlFor="delete">DELETE</label>
          </fieldset>
        </form>
      </main>
    );
  }
}

export default Form;