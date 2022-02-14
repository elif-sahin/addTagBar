import React from 'react';
import './tagSearch.scss';

/**
 * This component can be used for search operations inside a dropdown list.
 * 
 * @param placeholder placeholder for the search area
 * @param dropdownElements element list for search dropdown list
 * @param onClickElement callback function to controlling actions after clicking on a dropdown element.
 * 
 * @author elsahin
 */
export const TagSearch = ({ placeholder, onClickElement, dropdownElements }) => {
    const [filteredSearch, setFilteredSearch] = React.useState(max5Element(dropdownElements));
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const [searchVal, setSearchVal] = React.useState("");

    const filterItems = (value) =>
        dropdownElements.filter(
            (element) =>
                element.toLowerCase().trim().includes(value)
        );

    const onSearchInputChange = (e) => {
        const value = e.target.value.toLowerCase().trim();
        setSearchVal(value);
        setFilteredSearch(max5Element(filterItems(value)));
    };

    const renderDropdownElement = filteredSearch.map((elName, index) =>
        <div key={index} className='dropdown-item'
            onClick={() => {
                setDropdownOpen(false);
                setSearchVal("");
                onClickElement(elName);
            }
            }>
            <div className='element-text'>{elName}</div>
        </div>
    );

    /*
    * Dropdown list should contain max 5 elements. 
    * Other elements can be reachable by writing couple of letters on the searchbar.
    */
    function max5Element(arr) {
        if (arr.length > 5) {
            return arr.slice(0, 5);
        }
        return arr;
    }

    return (
        <div className="tag-search-wrapper">
            <input
                className='tag-search-input'
                value={searchVal}
                placeholder={placeholder}
                onChange={onSearchInputChange}
                onFocus={() => setDropdownOpen(true)}
            >
            </input>
            <div className={'dropdown-list ' + (dropdownOpen ? "open" : "closed")}>{renderDropdownElement}</div>
        </div>
    );
}
