import React, {useState} from 'react';
import './SearchBar.css';

const SearchBar = ({onSearchQueryUpdate}) => {

  const [searchInput, setSearchInput] = useState('');
  
  const handleSubmit = () => {
    onSearchQueryUpdate(searchInput);
  }

  return (
    <div className="SearchBar">
      <input className="search-bar" type="text"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)} />
        <button className="search-button" type="submit"
          onClick={handleSubmit}>search</button>      
    </div>
      );
    }
    
    
    export default SearchBar;
