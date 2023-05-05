import { ReactElement, ReactNode } from "react";

export const NEW_YORK_TIMES_API_KEYS = `AJLRj5SPZnAIVGAoBZfFGRmQ8h23gKMf`;
export const NEW_YORK_TIMES_API = `https://api.nytimes.com/svc/search/v2/articlesearch.json`;
export const NEW_YORK_TIMES_LIST_CNT = "4";

/** 무한 스크롤에서 스크롤할 때 이벤트 */
export type IntersectHandler = (
	entry: IntersectionObserverEntry,
	observer: IntersectionObserver
) => void;

/** 뉴스 데이터 타입 */
export interface INewsFetchProps {
	response: any;
	nextPage: number;
	hasNextPage: boolean;
}

/** 무한 스크롤 */
export interface InfiniteDataProps {
	response: any;
	nextPage: any;
	hasNextPage: boolean;
}

/** 모달 팝업의 자식 엘리먼트 타입 */
export interface IModalProps {
	children: ReactElement;
}

/** 뉴스 데이터 타입 */
export interface INewsProps {
	thumbnail_standard: string;
	title: string;
	created_date: string;
}

/** 해더의 버튼들 타입 */
export interface IHeaderBtnsTypeProps {
	headline?: string;
	date?: string;
	nation?: string;
}

/** 해더의 버튼 정의 */
export interface IHeaderBtnProps {
	img?: ReactNode;
	type: IHeaderBtnsTypeProps;
}

/** 뉴스 검색할 때 사용하는 파람값들 */
export interface INewsParamsProps {
	page: string;
	"api-key": string;
	q: string;
	sort: string;
	fq?: string;
	begin_date?: string;
	end_date?: string;
}
