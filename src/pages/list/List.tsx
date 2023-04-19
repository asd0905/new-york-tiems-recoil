import { SLayout } from "./List.style"
import { UesFetchNews, useInterSect } from "../../hooks/Hooks";
import { useRecoilValue } from "recoil";
import { newsListAtom } from "../../atoms/atoms";
import { Suspense, useEffect } from "react";

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
                    {
                        newsList?.map((news: any, index: number) => (
                            <div key={`${news?.created_date}_${index}`}>
                                <img src={news?.thumbnail_standard} alt="img" />
                                <div>{news?.title}</div>
                            </div>
                        ))
                    }
                </Suspense>
            }
            {isFetching && <div style={{ height: '50px', backgroundColor: '#ddd' }}></div>}
            <div ref={ref}></div>
        </SLayout>
    )
}

export default List;