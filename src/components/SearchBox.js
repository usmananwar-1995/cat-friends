import React from 'react';

const SearchBox = ({ changeSearch }) => {
    return (
        <div className='pa2'>
            <input
              className='pa2 ba b--green bg-lightest-blue'
              type='search'
              placeholder='Search Cats'
              onChange={changeSearch}
            />
        </div>
    );
}

export default SearchBox;