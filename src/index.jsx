import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header.jsx';
import Form from './components/form.jsx';
import Results from './components/results.jsx';
import Footer from './components/footer.jsx';

// import './app.scss';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: '', headers: {}, body: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(payload) {
    this.setState({ headers: payload.headers });
    payload.json()
      .then(results => {
        this.setState({ count: results.count, body: results.results });
      });
  }

  render() {
    return (
      <div className="main">
        <Header />
        <Form handleSubmit={this.handleSubmit}/>
        <Results results={this.state}/>
        <Footer />
      </div>
    );
  }
} 

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);