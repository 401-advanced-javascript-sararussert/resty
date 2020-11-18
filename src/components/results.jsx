import React from 'react';
import JSONPretty from 'react-json-pretty';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    console.log(this.props.results);
    return (
      <div>
        <p>Welcome to the results</p>
        <p>The Count is: {this.props.results.count}</p>
        <p>Body:<JSONPretty id="json-pretty" data={this.props.results.body}></JSONPretty></p>
        {/* <p>Headers: {this.props.results.headers}</p>*/}
      </div>
    );
  }
}


export default Results;
