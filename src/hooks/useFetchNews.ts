import { InfiniteData, useInfiniteQuery } from "react-query";
import { newsListFetch } from "../fetch/fetch";
import { useSetRecoilState } from "recoil";
import { newsListAtom } from "../atoms/atoms";
import { InfiniteDataProps } from "../app.constant";

/** 뉴스정보 가져오는 InifiniteQuery Fetch */
export const UesFetchNews = () => {
    const setNewsList = useSetRecoilState(newsListAtom);
    return useInfiniteQuery(
        ['newsList'], newsListFetch,
        {
            refetchOnWindowFocus: false,
            getNextPageParam: (lastPage, allPage) => {
                return lastPage && lastPage.hasNextPage &&
                    lastPage?.response?.response?.meta?.hits >= allPage.length * 10 ?
                    lastPage?.nextPage : null;
            },
            onSuccess: (data: InfiniteData<any>): void => {
                if ((data?.pages.length > 0 && !data?.pages[data?.pages.length - 1]?.response) ||
                    data?.pages.length !== data?.pageParams.length) return;
                const combineArr = data.pages.flatMap((page: InfiniteDataProps) => page.response.response.docs);
                setNewsList(combineArr);
            },
            onError: () => {
                setNewsList([]);
            }
        }
    )
}