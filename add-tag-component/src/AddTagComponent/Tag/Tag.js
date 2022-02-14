import './tag.scss';
import React from 'react';

export const Tag= ({tagText, onClickRemove}) =>{
  
  return (
    <div className="tag-wrapper">
      <div className='tag-text'>{tagText}</div>
      <div className="remove-tag-button" onClick={()=>onClickRemove(tagText)}>x</div>
    </div>
  );
}
