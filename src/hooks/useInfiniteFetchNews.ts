import { InfiniteData, useInfiniteQuery } from "react-query";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isSearchAtom, newsListAtom, newsParamsAtom } from "../atoms/atoms";
import { INewsParamsProps, InfiniteDataProps } from "../app.constant";
import { QueryFunctionContext } from "react-query";
import { useRecoilValue } from "recoil";
import {} from "../atoms/atoms";
import { NEW_YORK_TIMES_API } from "../app.constant";
import { UseFetchNews } from "./useFetchNews";

/** 뉴스정보 가져오는 InifiniteQuery Fetch */
export const UseInfiniteFetchNews = () => {
	const setNewsList = useSetRecoilState(newsListAtom);
	const newsParams = useRecoilValue<INewsParamsProps>(newsParamsAtom);
	const fetchNews = (pageParam: any) => {
		return UseFetchNews(pageParam, newsParams);
	};
	const queryKey = ["newsList"];
	if (newsParams.q) {
		queryKey.push(newsParams.q);
	}
	if (newsParams.fq) {
		queryKey.push(newsParams.fq);
	}
	if (newsParams.begin_date) {
		queryKey.push(newsParams.begin_date);
	}
	return useInfiniteQuery(queryKey, fetchNews, {
		refetchOnWindowFocus: false,
		getNextPageParam: (lastPage, allPage) => {
			return lastPage &&
				lastPage.hasNextPage &&
				lastPage?.response?.response?.meta?.hits >= allPage.length * 10
				? lastPage?.nextPage
				: null;
		},
		onSuccess: (data: InfiniteData<any>): void => {
			console.log(data);
			if (
				(data?.pages.length > 0 &&
					!data?.pages[data?.pages.length - 1]?.response) ||
				data?.pages.length !== data?.pageParams.length
			)
				return;
			const combineArr = data.pages.flatMap(
				(page: InfiniteDataProps) => page.response.response.docs
			);
			setNewsList(combineArr);
		},
		onError: () => {
			setNewsList([]);
		},
	});
};
