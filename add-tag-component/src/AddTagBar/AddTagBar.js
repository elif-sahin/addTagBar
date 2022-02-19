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
export const AddTagBar = ({ width, tagOptionslist, addTagText, maxTagNumber }) => {
  const [taglist, setTagList] = React.useState([]);

  const onClickRemoveTag = (tagText) => {
    setTagList(taglist.filter((tag) => tag !== tagText));
  }

  const onClickAddTag = (tagText) => {
    setTagList([...taglist, tagText]);
  }

  const tagContent = taglist.map((tag, index) => <Tag key={index} tagText={tag} onClickRemove={onClickRemoveTag}></Tag>);
  const dropdownOptions = tagOptionslist.filter((tagOpt) => !taglist.includes(tagOpt));

  const getTagSearchContent = () => {
    if (dropdownOptions.length > 0 && taglist.length < maxTagNumber) {
      return <TagSearch
        placeholder={addTagText}
        onClickElement={onClickAddTag}
        dropdownElements={dropdownOptions}
        maxElementCount={5}
      />
    }
    return null;
  }

  return (
    <div className="add-tag-bar" style={{ width: `${width + "px"}` }}>
      {tagContent}
      {getTagSearchContent()}
    </div>
  );
}
