import { FC, useState, Dispatch, SetStateAction } from 'react';
import MiniSearch, { Suggestion } from 'minisearch';
import ReactAutocomplete from 'react-autocomplete';

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
  updateSearchTerm: Dispatch<SetStateAction<string>>;
};

export const Autocomplete: FC<AutocompletePropTypes> = ({
  searchTerm,
  suggestions,
  updateSearchTerm,
}) => (
  <ReactAutocomplete
    getItemValue={(item) => item.suggestion}
    items={suggestions}
    renderItem={(item, isHighlighted) => (
      <div
        key={item.title}
        style={{ background: isHighlighted ? 'black' : 'lightgray' }}
      >
        {item.suggestion}
      </div>
    )}
    value={searchTerm}
    onChange={(e) => updateSearchTerm(e.target.value)}
    onSelect={(value) => updateSearchTerm(value)}
  />
);
