import React from 'react';
import request from 'superagent';
import RepositorySearchResult from './RepositorySearchResult.jsx';

export default class RepositorySearch extends React.Component {

  constructor() {
    super();
    this.state = {
      searchQuery: '',
      repositories: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  handleQueryChange(e) {
    this.setState({
      searchQuery: e.target.value
    });
    if (e.target.value === '') {
      this.setState({
        repositories: []
      });
    }
  }

  handleSearch() {
    if (this.state.searchQuery) {
      request
        .get('https://api.github.com/search/repositories')
        .query({
          q: this.state.searchQuery
        })
        .end((err, res) => {
          this.setState({
            repositories: res.body.items
          });
        });
    }
    this.setState({
      repositories: []
    });
  }

  render() {
    return (
      <section className="repository-search">
        <article className="repository-search__search-query">
          <input
            type="search"
            placeholder="Search GitHub repositories"
            onChange={this.handleQueryChange}
            value={this.state.searchQuery}
          />
          <button onClick={this.handleSearch}>
            Search
          </button>
        </article>
        <RepositorySearchResult repositories={this.state.repositories} />
      </section>
    );
  }
}
