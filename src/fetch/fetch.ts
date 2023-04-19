import { QueryFunctionContext } from "react-query";
import { NEW_YORK_TIMES_API, NEW_YORK_TIMES_API_KEYS, NEW_YORK_TIMES_LIST_CNT } from "../app.constant"

export const newsListFetch = async ({ pageParam = 1 }: QueryFunctionContext) => {
    try {
        const paramObj = {
            page: pageParam,
            'api-key': NEW_YORK_TIMES_API_KEYS,
            q: '',
            sort: 'newest',
        };
        const queryStr = new URLSearchParams(paramObj).toString();
        const response = await ((await fetch(`${NEW_YORK_TIMES_API}?${queryStr}`)).json());
        if (response.fault) throw new Error('에러 발생');
        return { response, nextPage: pageParam + 1, hasNextPage: true };
    } catch (e) {
        return { nextPage: pageParam + 1, hasNextPage: false };
    }
};