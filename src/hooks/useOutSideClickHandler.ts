import { RefObject, useEffect } from "react";

export interface IOutsideClickProps {
    ref: RefObject<HTMLElement>;
    callback?: (event?: Event) => void;
}

/** 모달의 밖을 클릭했을 때 이벤트 */
const useOutSideClickHandler = ({ ref, callback }: IOutsideClickProps) => {
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (!ref.current || ref.current.contains(e.target as Node)) {
                return;
            }
            callback?.(e);
        };

        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [ref, callback]);
};

export default useOutSideClickHandler;