import './tagSearch.scss';
import React from 'react';

export const TagSearch= ({placeholder, onClickElement, dropdownElements}) =>{
    const [filteredSearch, setFilteredSearch]=React.useState(dropdownElements);
    const [dropdownOpen, setDropdownOpen]=React.useState(false);
    const [searchVal, setSearchVal]=React.useState("");

    const filterItems = (value) =>
    dropdownElements.filter(
      (element) =>
        element.toLowerCase().trim().includes(value)
    );

    const onSearchInputChange = (e) => {
        const value = e.target.value.toLowerCase().trim();
        setSearchVal(value);
        setFilteredSearch(filterItems(value));
        setDropdownOpen(true);
    };

    const renderDropdownElement=filteredSearch.map((elName, index)=>
    <div key ={index+"_"+elName} className='dropdown-item'
     onClick={()=> {
        setDropdownOpen(false);
        setSearchVal("");
        onClickElement(elName);
        }
    }>
        <div className='element-text'>{elName}</div>
    </div>
    );
    return (
        <div className="tag-search-wrapper">
            <input className='tag-search-input' value={searchVal} placeholder={placeholder} onChange={onSearchInputChange}></input>
            <div className={'dropdown-list ' + (dropdownOpen ? "open" : "closed")}>{renderDropdownElement}</div>
        </div>
  );
}
