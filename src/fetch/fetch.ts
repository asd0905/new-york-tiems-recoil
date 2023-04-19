import { QueryFunctionContext } from "react-query";
import { NEW_YORK_TIMES_API, NEW_YORK_TIMES_API_KEYS, NEW_YORK_TIMES_LIST_CNT } from "../app.constant"

export const newsListFetch = async ({ pageParam = 0 }: QueryFunctionContext) => {
    try {
        const paramObj = { limit: NEW_YORK_TIMES_LIST_CNT, offset: pageParam.toString(), 'api-key': NEW_YORK_TIMES_API_KEYS };
        const queryStr = new URLSearchParams(paramObj).toString()
        const response = await ((await fetch(`${NEW_YORK_TIMES_API}?${queryStr}`)).json());
        if (response.fault) throw new Error('에러 발생');
        return { response, nextPage: pageParam + parseInt(NEW_YORK_TIMES_LIST_CNT), hasNextPage: true };
    } catch (e) {
        return { nextPage: pageParam + NEW_YORK_TIMES_LIST_CNT, hasNextPage: false };
    }
};