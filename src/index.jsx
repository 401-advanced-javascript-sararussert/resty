import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';

import Header from './components/header.jsx';
import Form from './components/form.jsx';
import Results from './components/results.jsx';
import History from './components/history.jsx';
import Footer from './components/footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: '', headers: {}, body: '', searched: []};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(payload, searchObj) {
    this.setState({ headers: payload.headers, body: payload.body.results, count: payload.body.count });
    this.state.searched.push(searchObj);
    this.setState({searched: this.state.searched});
  }

  render() {
    return (
      <div className="main">
        <Header />
        <Form handleSubmit={this.handleSubmit}/>
        <Results results={this.state}/>
        <History> 
          {this.state.searched}
        </History> 
        <Footer />
      </div>
    );
  }
} 

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);