import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './app.scss';

import Header from './components/header.jsx';
import AboutUs from './components/aboutUs.jsx';
import Form from './components/form.jsx';
import Results from './components/results.jsx';
import History from './components/history.jsx';
import HistoryLarge from './components/historyLarge.jsx';
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
      <Router>
        <div className="main">
          <Header />
          <Switch>
            <Route path="/aboutUs" component={AboutUs} />
            <Route path="/history" component={HistoryLarge} />
            <Route path="/" exact>
              <Form handleSubmit={this.handleSubmit}/>
              <Results results={this.state}/>
              <History> 
                {this.state.searched}
              </History> 
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
} 

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);