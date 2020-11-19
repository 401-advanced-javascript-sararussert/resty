import React from 'react';
import JSONPretty from 'react-json-pretty';

function results(props) {
  if (props.results.count > 0) {
    return (
      <div>
        <p>The Count is: {props.results.count}</p>
        <p>Headers:</p>
        <JSONPretty id="json-pretty" data={props.results.headers}></JSONPretty>
        <p>Body:</p>
        <JSONPretty id="json-pretty" data={props.results.body}></JSONPretty>
      </div>
    );
  } else {
    return null;
  }
  
}


export default results;
