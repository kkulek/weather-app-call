import {useRef} from "react";

function Search({searchValue, setSearchValue, handleSearch}){
    const searchRef = useRef(null);

    function handleBlur() {
        if (searchValue === "") {
            searchRef.current.classList.remove("focus");
        }
    }

    function handleFocus() {
        searchRef.current.classList.add("focus");
    }

    function handleInput(e) {
        setSearchValue(e.target.value);
    }

    return (
        <div className="search"
             ref={searchRef}
        >
            <input
                onChange={handleInput}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="search__input"
                type="text"
                value={searchValue}
                id="search"/>
            <label htmlFor="search" className="search__lbl">
                Type city
            </label>
            <button className="search__btn" onClick={handleSearch}>Search</button>
        </div>
    )
}



export default Search;