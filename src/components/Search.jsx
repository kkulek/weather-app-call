import {useRef} from "react";

function Search({searchValue, setSearchValue}){
    const searchRef = useRef(null);


    function handleFocus(e) {
        searchRef.current.classList.add("focus");
    }

    function handleInput(e) {
        setSearchValue(e.target.value);
    }

    return (
        <div className="search"
             ref={searchRef}>
            <input
                onChange={handleInput}
                onFocus={handleFocus}
                className="search__input"
                type="text"
                value={searchValue}
                id="search"/>
            <label htmlFor="search" className="search__lbl">
                Type city
            </label>
        </div>
    )
}



export default Search;