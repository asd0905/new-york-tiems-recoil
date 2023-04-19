import { SLayout } from "./List.style"
import { UesFetchNews, useInterSect } from "../../hooks/Hooks";
import { useRecoilValue } from "recoil";
import { newsListAtom } from "../../atoms/atoms";
import { Suspense } from "react";
import moment from 'moment';
import 'moment/locale/ko';

const List = () => {
    const { isFetching, hasNextPage, fetchNextPage, error, status } = UesFetchNews();
    const newsList = useRecoilValue(newsListAtom);

    const ref = useInterSect(async (entry, observer) => {
        observer.unobserve(entry.target);
        if (hasNextPage && !isFetching) {
            fetchNextPage();
        }
    }, { threshold: 0.2 });


    return (
        <SLayout>
            {status === 'error' ?
                (<div>{(error as any).message}</div>) :
                <Suspense fallback={<div>로딩중입니다...</div>}>
                    <div className="newsListBox">
                        {
                            newsList?.map((news: any, index: number) => (
                                <div className="newsList" key={`${news?.created_date}_${index}`}>
                                    <svg className="star" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.86603 14.8508C2.78823 15.2942 3.2258 15.6413 3.61224 15.4427L8.00146 13.1868L12.3907 15.4427C12.7771 15.6413 13.2147 15.2942 13.1369 14.8508L12.3072 10.1213L15.8295 6.76462C16.1587 6.45092 15.9883 5.87737 15.5473 5.81472L10.6488 5.11885L8.4647 0.792305C8.26795 0.402565 7.73498 0.402565 7.53823 0.792305L5.35411 5.11885L0.455637 5.81472C0.0146475 5.87737 -0.155753 6.45092 0.173428 6.76462L3.69576 10.1213L2.86603 14.8508ZM7.77063 12.0826L4.08488 13.977L4.77914 10.0197C4.81187 9.83316 4.75033 9.64214 4.61639 9.5145L1.70955 6.7444L5.76186 6.16873C5.92938 6.14494 6.07565 6.03795 6.15467 5.88141L8.00146 2.22308L9.84826 5.88141C9.92728 6.03795 10.0736 6.14494 10.2411 6.16873L14.2934 6.7444L11.3865 9.5145C11.2526 9.64214 11.1911 9.83316 11.2238 10.0197L11.918 13.977L8.23229 12.0826C8.0867 12.0078 7.91623 12.0078 7.77063 12.0826Z" fill="#6D6D6D" />
                                    </svg>
                                    <h3>{news?.headline?.main}</h3>
                                    <div className="newsInfo">
                                        <span className="source">{news?.source}</span>
                                        <span>{news?.byline?.original}</span>
                                        <span className="date">{moment(news?.pub_date).format('YYYY.MM.DD dd')}</span>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="interSectRef" ref={ref}></div>
                    </div>
                </Suspense>
            }
            {isFetching && <div style={{ height: '50px', backgroundColor: '#ddd' }}></div>}
        </SLayout>
    )
}

export default List;