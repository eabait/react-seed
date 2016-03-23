import React from 'react';

export default function RepositorySearchResult({ repositories }) {
  return (
    <ul className="repository-search__results">
      {repositories.map((repository) => (
        <li key={repository.id}>
          {repository.full_name}
        </li>
      ))}
    </ul>
  );
}

RepositorySearchResult.propTypes = {
  repositories: React.PropTypes.array.isRequired
};
