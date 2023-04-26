import { forwardRef, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SDateSpan } from "./CModal.style";
import DatePicker from 'react-datepicker';
import useOutSideClickHandler from "../../hooks/useOutSideClickHandler";
import CModal from "./CModal";
import { modalAtom } from "../../atoms/atoms";
import { useRecoilState } from "recoil";

type CustomDatePickerProps = {
    value?: string;
    onClick?: () => void;
};

const CHeaderModal = () => {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [startDate, setStartDate] = useState(new Date());
    const [modal, setModal] = useRecoilState(modalAtom);

    /** 검색하기 */
    const onSearch: SubmitHandler<any> = (e) => {
        console.log(e);
    }

    /** 모달 끄기 */
    const handleModalCloe = () => {
        setModal(false);
    }
    useOutSideClickHandler({ ref: modalRef, callback: handleModalCloe })

    /** 달력 커스텀 함수 */
    const CustomDatePicker = forwardRef<HTMLButtonElement, CustomDatePickerProps>(
        ({ value, onClick }, ref) => {
            return (
                <SDateSpan onClick={onClick} ref={ref} as='button'>
                    {value}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8536 7.14645C11.0488 7.34171 11.0488 7.65829 10.8536 7.85355L7.85355 10.8536C7.75979 10.9473 7.63261 11 7.5 11C7.36739 11 7.24021 10.9473 7.14645 10.8536L5.64645 9.35355C5.45118 9.15829 5.45118 8.84171 5.64645 8.64645C5.84171 8.45118 6.15829 8.45118 6.35355 8.64645L7.5 9.79289L10.1464 7.14645C10.3417 6.95118 10.6583 6.95118 10.8536 7.14645Z" fill="#C4C4C4" />
                        <path d="M3.5 0C3.77614 0 4 0.223858 4 0.5V1H12V0.5C12 0.223858 12.2239 0 12.5 0C12.7761 0 13 0.223858 13 0.5V1H14C15.1046 1 16 1.89543 16 3V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V3C0 1.89543 0.895431 1 2 1H3V0.5C3 0.223858 3.22386 0 3.5 0ZM1 4V14C1 14.5523 1.44772 15 2 15H14C14.5523 15 15 14.5523 15 14V4H1Z" fill="#C4C4C4" />
                    </svg>
                </SDateSpan>
            );
        }
    );
    return (
        <CModal>
            <div className="modalContainer" ref={modalRef}>
                <form onSubmit={handleSubmit(onSearch)}>
                    <div className="headlineBox">
                        <label htmlFor="headline">
                            <h3>헤드라인</h3>
                            <input {...register('headlineSearch', {
                                required: false,
                                pattern: {
                                    value: /^[^\s][\w\s\d]/gi,
                                    message: '숫자/영어만 가능합니다.'
                                },
                            })} />
                        </label>
                        <span>{errors?.headlineSearch?.message as string}</span>
                    </div>

                    <div className="dateBox">
                        <h3>날짜</h3>
                        <DatePicker
                            dateFormat='yyyy.MM.dd'
                            selected={startDate}
                            onChange={(date: Date) => setStartDate(date)}
                            customInput={<CustomDatePicker />}
                        />
                        <span>{errors?.dateSearch?.message as string}</span>
                    </div>

                    <div className="nationBox">
                        <h3>국가</h3>
                        <ul>
                            <li>대한민국</li>
                            <li>중국</li>
                            <li>일본</li>
                            <li>미국</li>
                            <li>북한</li>
                            <li>러시아</li>
                            <li>프랑스</li>
                            <li>영국</li>
                        </ul>
                    </div>
                    <button className="modalBtn">필터 적용하기</button>
                </form>
            </div>
        </CModal >
    )
}
export default CHeaderModal;