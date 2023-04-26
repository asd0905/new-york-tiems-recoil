import { createPortal } from "react-dom";
import { IModalProps } from "../../app.constant";
import { SOverlay } from "./CModal.style";
import { AnimatePresence } from "framer-motion";
import { modalAtom } from "../../atoms/atoms";
import { useRecoilValue } from "recoil";

const modalBgVarients = {
    start: {
        opacity: 0,
    },
    end: {
        opacity: 1,
        transition: {
            duration: .2,
        }
    },
    leaving: {
        opacity: 0,
        transition: {
            duration: .2,
        }
    }
}

const CModal = ({ children }: IModalProps) => {
    let modalRoot = document.getElementById('modalRoot');
    const modal = useRecoilValue(modalAtom);
    if (!modalRoot) return null;
    return createPortal(
        <>
            <AnimatePresence>
                {modal ?
                    <SOverlay
                        variants={modalBgVarients}
                        initial='start'
                        animate='end'
                        exit='leaving'
                    >
                        {children}
                    </SOverlay> : null}
            </AnimatePresence>
        </>,
        modalRoot
    );
}

export default CModal;