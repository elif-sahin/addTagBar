import React from 'react';
import { Tag } from './Tag/Tag';
import { TagSearch } from './TagSearch/TagSearch';
import './addTagBar.scss';

/**
 * Tag Bar which allows to select bunch of tags with a nice interface.
 * 
 * @param width width of the bar
 * @param tagOptionList includes all possible tags.
 * @param addTagText tag search field placeholder.
 * 
 * @author elsahin
 */
export const AddTagBar = ({ width, tagOptionslist, addTagText }) => {
  const [taglist, setTagList] = React.useState([]);

  const onClickRemoveTag = (tagText) => {
    setTagList(taglist.filter((tag) => tag !== tagText));
  }

  const onClickAddTag = (tagText) => {
    setTagList([...taglist, tagText]);
  }

  const renderTags = taglist.map((tag) => <Tag key={tag} tagText={tag} onClickRemove={onClickRemoveTag}></Tag>);
  const searchDropdownElements = tagOptionslist.filter((tagOpt) => !taglist.includes(tagOpt));

  return (
    <div className="add-tag-bar">
      {renderTags}
      <TagSearch
        placeholder={addTagText}
        onClickElement={onClickAddTag}
        dropdownElements={searchDropdownElements}
      />
    </div>
  );
}
