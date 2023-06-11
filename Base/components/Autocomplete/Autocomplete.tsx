import { FC, useState, Dispatch, SetStateAction } from 'react';

import { css } from '@emotion/css';
import MiniSearch, { Suggestion } from 'minisearch';
import ReactAutocomplete from 'react-autocomplete';

import { Icon } from './Icon';

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
  <div
    className={css`
      display: flex;
      align-items: center;
      gap: 6px;
      border-radius: 4px;
      padding: 8px;
      border: 0.1px solid white;
      background-color: black;
      color: white;
      font-family: 'Menlo', monospace;
      width: 232px;

      input {
        border: none;
        background-color: black;
        color: white;
        font-family: 'Menlo', monospace;
        font-size: 15px;

        &:focus,
        &:focus-visible {
          outline: none;
        }
      }
    `}
  >
    <Icon src="/search.svg" />
    <label
      htmlFor="test"
      className={css`
        position: absolute;
        top: -9999px;
        left: -9999px;
      `}
    >
      Search
    </label>
    <ReactAutocomplete
      getItemValue={(item) => item.suggestion}
      items={suggestions}
      renderItem={(item, isHighlighted) => (
        <div
          key={item.suggestion}
          style={{
            background: isHighlighted
              ? 'rgba(255, 255, 255, 0.1)'
              : 'rgb(27, 27, 27)',
            padding: '6px 8px',
            display: 'flex',
          }}
        >
          {item.suggestion}
        </div>
      )}
      value={searchTerm}
      onChange={(e) => updateSearchTerm(e.target.value)}
      onSelect={(value) => updateSearchTerm(value)}
      wrapperStyle={{
        position: 'relative',
        display: 'flex',
      }}
      inputProps={{
        id: 'test',
      }}
      menuStyle={{
        position: 'absolute',
        top: '30px',
        left: '-34px',
        minWidth: '232px',
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
        overflow: 'hidden',
        backgroundColor: 'rgb(27, 27, 27)',
      }}
    />
  </div>
);
