import React from 'react';
import '../design/historyLarge.scss';
// import JSONPretty from 'react-json-pretty';
// import History from './components/history.jsx';

class HistoryLarge extends React.Component {
  constructor() {
    super();
    this.state = { body: '', historyList: []};
    this.createHistoryList = this.createHistoryList.bind(this);
    this.renderBody = this.renderBody.bind(this);
  }

  createHistoryList() {
    let updatedHistoryList = [];
    let i = 0;
    while (localStorage.key(i)) {
      let key = localStorage.key(i);
      let savedSearch = localStorage.getItem(key);
      updatedHistoryList.push(JSON.parse(savedSearch));
      i++;
    }
    this.setState({historyList: updatedHistoryList});
  }
  renderBody(key) {
    this.setState({body: key.body});
  }

  render() {
    return (
      <div>
        <button onClick={this.createHistoryList}>Update History</button>
        <ul className="list">
          {this.state.historyList.map(searchRecord => <li className="search" key={searchRecord}>{searchRecord.method} : {searchRecord.url}</li>)}
        </ul>
      </div>
    );
  }
  
}

export default HistoryLarge;

