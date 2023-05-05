import { QueryFunctionContext } from "react-query";
import { INewsParamsProps, NEW_YORK_TIMES_API } from "../app.constant";

/** 뉴스 데이터 가져오는 fetch */
export const UseFetchNews = async (
	{ pageParam = 1 }: any,
	params?: INewsParamsProps
) => {
	try {
		const paramObj = {
			...params,
			page: pageParam,
		};
		const queryStr = new URLSearchParams(paramObj).toString();
		const response = await (
			await fetch(`${NEW_YORK_TIMES_API}?${queryStr}`)
		).json();
		if (response.fault) throw new Error("에러 발생");
		return { response, nextPage: pageParam + 1, hasNextPage: true };
	} catch (e) {
		return { nextPage: pageParam + 1, hasNextPage: false };
	}
};
