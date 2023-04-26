import { useCallback, useEffect, useRef } from "react";
import { IntersectHandler } from "../app.constant";

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