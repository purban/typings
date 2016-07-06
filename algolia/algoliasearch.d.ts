// Type definitions for algoliasearch 3.17.0
// Project: https://github.com/algolia/algoliasearch-client-js
// Definitions by: Pierre Urban <https://github.com/purban/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface IAlgoliaSearch {
    (applicationID: string, apiKey: string): any;
    initIndex(index: string);
}

declare var AlgoliaSearch: IAlgoliaSearch;

declare module "algoliasearch" {
    export = AlgoliaSearch;
}
