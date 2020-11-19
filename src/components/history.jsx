import React from 'react';

function history() {
  let historyList = [];
  let i = 0;
  while (localStorage.key(i)) {
    let key = localStorage.key(i);
    let savedSearch = localStorage.getItem(key);
    historyList.push(JSON.parse(savedSearch));
    i++;
  }
 
  if (historyList !== []) {
    return (
      <ul className="list">
        {historyList.map(searchRecord => <li className="search" key={searchRecord}>{searchRecord.method} : {searchRecord.url}</li>)}
      </ul>
    );
  } else {
    return null;
  }
  
}


export default history;