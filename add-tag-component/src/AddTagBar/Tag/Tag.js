import React from 'react';
import './tag.scss';
/**
 * Pretty Tag component
 * @param tagText tag name
 * @param onClickRemove callback function when remove clicked for the tag.
 * 
 * @author elsahin
 */
export const Tag = ({ tagText, onClickRemove }) => {

  return (
    <div className="tag-wrapper">
      <div className='tag-text'>{tagText}</div>
      <button className="remove-tag-button" onClick={() => onClickRemove(tagText)}>
        <img className="remove-tag-button-image" src="./icons/close-button.png" alt="X"/>
      </button>
    </div>
  );
}
