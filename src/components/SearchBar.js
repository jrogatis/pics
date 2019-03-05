import React, { Component } from 'react';
class SearchBar extends Component {
  state = {
    term: ''
  };

  onSearchSubmit = event => {
    const { onSubmit } = this.props;
    const { term } = this.state;
    event.preventDefault();
    onSubmit(term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSearchSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>{' '}
        </form>
      </div>
    );
  }
}

export default SearchBar;
