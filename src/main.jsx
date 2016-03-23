import React from 'react';
import ReactDOM from 'react-dom';
import RepositorySearch from './RepositorySearch/RepositorySearch.jsx';

function Application() {
  return (
    <section className="application">
      <RepositorySearch />
    </section>
  );
}

ReactDOM.render(
  <Application />,
  document.querySelectorAll('.application-container')[0]
);
