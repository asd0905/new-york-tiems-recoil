export const NEW_YORK_TIMES_API_KEYS = `AJLRj5SPZnAIVGAoBZfFGRmQ8h23gKMf`;
export const NEW_YORK_TIMES_API = `https://api.nytimes.com/svc/search/v2/articlesearch.json`;
export const NEW_YORK_TIMES_LIST_CNT = '4';

export type IntersectHandler = (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver
) => void

export interface INewsFetchProps {
    response: any;
    nextPage: number;
    hasNextPage: boolean;
}

export interface InfiniteDataProps {
    response: any;
    nextPage: any;
    hasNextPage: boolean;
}