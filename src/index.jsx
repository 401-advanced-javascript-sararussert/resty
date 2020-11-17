import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Form from './components/form.jsx';

// import './app.scss';

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Form />
        <Footer />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);