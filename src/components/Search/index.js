import React from 'react';

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom';

import * as Style from './styled';
import Hit from './Hit';

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
};

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey);

const Search = () => (
  <Style.SearchWrapper>
    <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
      <SearchBox autoFocus translations={{ placeholder: 'Pesquisar...' }} />
      <Stats
        translations={{
          stats(nbHits, timeSpentMs) {
            return `${nbHits} resultados encontrados em ${timeSpentMs}ms`;
          },
        }}
      />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  </Style.SearchWrapper>
);
export default Search;
