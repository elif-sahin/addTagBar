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
export const TagSearch = ({ placeholder, onClickElement, dropdownElements, maxElementCount }) => {
    // Add dropdown elements to state in order to avoid unnecessary changes that can effect to elements
    const [filteredSearch, setFilteredSearch] = React.useState([]);
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const [searchVal, setSearchVal] = React.useState("");

    // Listen the props
    React.useEffect(() => {
        setFilteredSearch([...dropdownElements]);
    }, [dropdownElements]);

    const filterItems = (value) =>
        dropdownElements.filter(
            (element) =>
                element.toLowerCase().trim().includes(value)
        );

    const onSearchInputChange = (e) => {
        let copyVal = e.target.value.repeat(1);
        const value = e.target.value.trim().toLowerCase();
        setSearchVal(copyVal);
        setFilteredSearch(filterItems(value));
    };

    const makeBold = (text, keyword) => {
        if (keyword != "") {
            const textOccIndexes = [...text.matchAll(new RegExp(keyword, 'gi'))].map(a => a.index)
            let ind = 0;

            const bolded = textOccIndexes.map((index) => {
                let firstPart = text.slice(ind, index);
                let occPart = text.slice(index, index + keyword.length);
                ind = index + keyword.length;
                let lastPart = null;

                if (textOccIndexes[textOccIndexes.length - 1] === index) {
                    lastPart = text.slice(ind, text.length);
                }

                return <>
                    {firstPart}
                    <b>{occPart}</b>
                    {lastPart}
                </>
            });
            return <>{bolded}</>;

        }
        return <>{text}</>;
    }

    const renderDropdownElement = maxElement(filteredSearch).map((elName, index) =>
        <div key={index} className='dropdown-item'
            onClick={() => {
                closeDropdown();
                setSearchVal("");
                onClickElement(elName);
            }
            }>
            <div className='element-text'>{makeBold(elName, searchVal)}</div>
        </div>
    );

    /*
    * Dropdown list should contain less than or equal maxElementCount . 
    * Other elements can be reachable by writing couple of letters on the searchbar.
    */
    function maxElement(arr) {
        if (arr.length > maxElementCount) {
            return arr.slice(0, maxElementCount);
        }
        return arr;
    }

    const closeDropdown = () => setDropdownOpen(false);
    const openDropdown = () => setDropdownOpen(true);

    return (
        <div className={"tag-search-wrapper"} tabIndex={0} onFocus={openDropdown} onBlur={closeDropdown} >
            <input
                className='tag-search-input'
                value={searchVal}
                placeholder={placeholder}
                onChange={onSearchInputChange}
            >
            </input>
            <div className={'dropdown-list ' + ((dropdownOpen && renderDropdownElement.length > 0) ? "open" : "closed")}>{renderDropdownElement}</div>
        </div>
    );
}
