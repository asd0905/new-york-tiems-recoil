import { InfiniteData, useInfiniteQuery } from "react-query";
import { newsListFetch } from "../fetch/fetch";
import { useSetRecoilState } from "recoil";
import { newsListAtom } from "../atoms/atoms";
import { InfiniteDataProps, IntersectHandler, NEW_YORK_TIMES_LIST_CNT } from "../app.constant";
import { useCallback, useEffect, useRef } from "react";

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

/**
 * root 원소와 target 원소가 교차 상태인지를 판단하여 조건에 만족할 경우
 * callback 함수를 실행하는 target 원소의 Ref 를 반환합니다.
 * @param onIntersect 메게변수 (entry, observer)
 * @param options 옵저빙 관련 옵션
 */
export const useInterSect = (
    onIntersect: IntersectHandler,
    options?: IntersectionObserverInit
) => {
    const ref = useRef<HTMLDivElement>(null); // target 설정을 위함
    const callback = useCallback(
        (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { // root와 target이 교차인지 판단해서 콜백함수 실행
                    onIntersect(entry, observer);
                }
            })
        },
        [onIntersect]
    )

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(callback, options);
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref, options, callback]);

    return ref;
}