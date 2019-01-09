// Basics for react app rendering
import React from 'react';
import ReactDom from 'react-dom';

// App setup basics
const App = () => {
  return <div>Hello React!</div>;
};

// Renders the App element in the document element with the root ID
ReactDOM.render(<App />, document.getElementById('root'));
