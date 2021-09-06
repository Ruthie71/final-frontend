import { useRef } from 'react';
import ReactTags from 'react-tag-autocomplete';
import "./KeyWords.css"


const KeyWords = ({ tags, setTags, suggestions, noSuggestionsText }) => {
  const reactTags = useRef();
  const onDelete = i => setTags(prev => prev.filter(t => t.id !== tags[i].id));

  const onAddition = tag => setTags(prev => [...prev, tag]);

  return (
    <div style={{ margin: 10 }}>
      <ReactTags
        ref={reactTags}
        tags={tags}
        suggestions={suggestions}
        noSuggestionsText={noSuggestionsText}
        onDelete={onDelete}
        onAddition={onAddition}
        classNames={{
          root: 'form-control',
          rootFocused: 'form-control:focus',
          selected: 'react-tags__selected',
          selectedTag: 'react-tags__selected-tag',
          selectedTagName: 'react-tags__selected-tag-name',
          search: 'react-tags__search',
          searchWrapper: 'react-tags__search-wrapper',
          searchInput: 'react-tags__search-input',
          suggestions: 'react-tags__suggestions',
          suggestionActive: 'is-active',
          suggestionDisabled: 'is-disabled',
          suggestionPrefix: 'react-tags__suggestion-prefix'
        }}
      />
    </div>
  );
};

export default KeyWords;
