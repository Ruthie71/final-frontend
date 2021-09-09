import { useRef, useContext } from "react";
import ReactTags from "react-tag-autocomplete";
import { FormikContext } from "../context/FormikState";
import "./KeyWords.css";

const KeyWords = ({ tags, setTags, suggestions, noSuggestionsText, type }) => {
    const { updateProfile } = useContext(FormikContext);

    const reactTags = useRef();

    const onDelete = (i) => {
        const update = tags.filter((t) => t.id !== tags[i].id);
        if (type === "personal") {
            updateProfile({ personalskills: update });
        } else if (type === "lang") {
            updateProfile({ languages: update });
        } else if (type === "tech") {
            updateProfile({ techskills: update });
        }
    };

    const onAddition = (tag) => {
        const update = [...tags, tag];
        if (type === "personal") {
            updateProfile({ personalskills: update });
        } else if (type === "lang") {
            updateProfile({ languages: update });
        } else if (type === "tech") {
            updateProfile({ techskills: update });
        }
    };

    return (
        <div className="mb-1 mt-1">
            <ReactTags
                ref={reactTags}
                tags={tags}
                suggestions={suggestions}
                noSuggestionsText={noSuggestionsText}
                onDelete={onDelete}
                onAddition={onAddition}
                classNames={{
                    root: "form-control",
                    rootFocused: "form-control:focus",
                    selected: "react-tags__selected",
                    selectedTag: "react-tags__selected-tag",
                    selectedTagName: "react-tags__selected-tag-name",
                    search: "react-tags__search",
                    searchWrapper: "react-tags__search-wrapper",
                    searchInput: "react-tags__search-input",
                    suggestions: "react-tags__suggestions",
                    suggestionActive: "is-active",
                    suggestionDisabled: "is-disabled",
                    suggestionPrefix: "react-tags__suggestion-prefix",
                }}
            />
        </div>
    );
};

export default KeyWords;
