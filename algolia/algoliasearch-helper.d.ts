// Type definitions for algoliasearch-helper 2.11.0
// Project: https://github.com/algolia/algoliasearch-helper-js
// Definitions by: Pierre Urban <https://github.com/purban/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface IAlgoliaSearchHelper {
    (algoliaClient: any, index: string, params: any): any;
    setQuery(query: string);
    on(event: string, resolver: any);
    toggleRefine(facet: string, value: string);
    removeNumericRefinement(facet: string, relationalOperator: string);
    addNumericRefinement(facet: string, relationalOperator: string, value: number);
    setCurrentPage(page: number);
    setIndex(index: string);
    clearRefinements();
    overrideStateWithoutTriggeringChangeEvent(obj: any); // seriously?
    getStateAsQueryString(config: any);
    search();
    state: any;
}

declare var AlgoliaSearchHelper: IAlgoliaSearchHelper;

declare module "algoliasearch-helper" {
    export = AlgoliaSearchHelper;
}
