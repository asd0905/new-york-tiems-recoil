import { useSetRecoilState } from "recoil";
import { modalAtom } from "../../atoms/atoms";
import CHeaderModal from "../../components/Modal/CHeaderModal";

const Header = () => {
    const setModal = useSetRecoilState(modalAtom);
    const handleModalOpen = () => {
        setModal(true);
    }
    return (
        <>
            <div>
                <button onClick={handleModalOpen}>모달열어</button>
            </div>
            <CHeaderModal />
        </>
    )
}
export default Header;