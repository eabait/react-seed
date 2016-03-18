'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

class Application extends React.Component {
  render() {
    return (
      <section className="application">
        React Seed
      </section>
    );
  }
};

ReactDOM.render(
  <Application />,
  document.querySelectorAll('.application-container')[0]
);
