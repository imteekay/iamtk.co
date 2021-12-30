import { FC, useState, Dispatch, SetStateAction } from 'react';
import MiniSearch, { SearchResult, Suggestion } from 'minisearch';
import ReactAutocomplete from 'react-autocomplete';
import { postsList } from 'Home/components/Writings/postsList';

type Options = {
  fields: string[];
  storeFields: string[];
  items: Record<any, any>[];
};

export function useSearch({ fields, storeFields, items }: Options) {
  const [searchTerm, setSearchTerm] = useState('');
  const miniSearch = new MiniSearch({
    fields,
    storeFields,
  });

  miniSearch.addAll(items);

  const searchedItems = miniSearch.search(searchTerm);
  const suggestions = miniSearch.autoSuggest(searchTerm);

  return { searchTerm, searchedItems, suggestions, setSearchTerm };
}

type AutocompletePropTypes = {
  searchTerm: string;
  suggestions: Suggestion[];
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

export const Autocomplete: FC<AutocompletePropTypes> = ({
  searchTerm,
  suggestions,
  setSearchTerm,
}) => {
  return (
    <ReactAutocomplete
      getItemValue={(item) => item.suggestion}
      items={suggestions}
      renderItem={(item, isHighlighted) => (
        <div style={{ background: isHighlighted ? 'black' : 'lightgray' }}>
          {item.suggestion}
        </div>
      )}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onSelect={(value) => setSearchTerm(value)}
    />
  );
};
