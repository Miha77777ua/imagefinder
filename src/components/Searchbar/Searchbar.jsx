export const Searchbar = ({ loadPics, keyword, updateKeyword }) => {
  return (
    <header className="Searchbar" onSubmit={loadPics}>
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
          value={keyword}
          onChange={updateKeyword}
        />
      </form>
    </header>
  );
}
