import React from "react";

export class Searchbar extends React.Component {
  render() {
    return (
      <header className="Searchbar" onSubmit={this.props.loadPics}>
        <form className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="Searchform-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.props.keyword}
            onChange={this.props.updateKeyword}
          />
        </form>
      </header>
    );
  }
}
